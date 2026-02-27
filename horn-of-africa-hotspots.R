## Hot spots for Somalia - for website
## Date: January 2024

rm(list = ls())

library(devtools)
library(sf)
sf_use_s2(FALSE)
library(tidyverse)
library(spdep)
library(concaveman)
library(spatialreg)


# Data --------------------------------------------------------------------

data <- read.csv("data/somalia.csv")

points.sf <- st_as_sf(data, coords = c("longitude", "latitude"))

st_crs(points.sf) <- 4326


# Functions ---------------------------------------------------------------

points.sf <- points.sf %>% rename(year_column = year)

# Function to process subsamples for a specific year
process_subsample <- function(
  points_sf,
  year,
  concavity,
  length_threshold,
  buffer_dist,
  cellsize,
  p_value_threshold
) {
  # Filter points for the specified year
  points_sf_year <- points_sf[points_sf$year_column == year, ]

  # Concave hull
  concave_hull <- concaveman(
    points_sf_year,
    concavity = concavity,
    length_threshold = length_threshold
  )

  # Buffer
  buffer <- st_buffer(concave_hull, dist = buffer_dist)

  # Make grid and clip
  grid_clip <- st_make_grid(buffer, cellsize = cellsize, what = "polygons") %>%
    st_intersection(buffer)

  # Intersect points with grid
  points_count <- st_intersects(grid_clip, points_sf_year)

  # Create spatial dataframe
  grid_count <- st_sf(
    pt_count = lengths(points_count),
    geometry = st_cast(grid_clip, "MULTIPOLYGON")
  )

  # Create spatial neighbors
  neighbors <- poly2nb(grid_count, queen = TRUE)
  weighted_neighbors <- nb2listw(
    include.self(neighbors),
    style = "B",
    zero.policy = TRUE
  )

  # Calculate localG_perm
  grid_count$HOTSPOT <- as.vector(localG_perm(
    grid_count$pt_count,
    weighted_neighbors
  ))

  # Categorize based on p-value
  grid_count$z_cat <- "Not significant or cold spot"
  grid_count$z_cat[
    grid_count$HOTSPOT >= p_value_threshold[1]
  ] <- "Hotspot (P-value: 0.001)"
  grid_count$z_cat[
    grid_count$HOTSPOT < p_value_threshold[1] &
      grid_count$HOTSPOT >= p_value_threshold[2]
  ] <- "Hotspot (P-value: 0.05)"

  # Select hotspots
  grid_count_sel <- grid_count[
    grid_count$z_cat %in%
      c("Hotspot (P-value: 0.001)", "Hotspot (P-value: 0.05)"),
  ]

  # Union hotspots
  hotspot_union <- st_union(grid_count_sel)

  # Create a data frame with year information
  result_df <- data.frame(year = year, geometry = st_as_text(hotspot_union))

  return(result_df)
}

# Set parameters
concavity_value <- 2
length_threshold_value <- 0
buffer_dist_value <- 0.5
cellsize_value <- c(0.5, 0.5)
p_value_threshold_values <- c(3.091, 1.96)

unique_years <- unique(points.sf$year_column)

# Process subsamples and combine the results
result_list <- lapply(unique_years, function(year) {
  process_subsample(
    points.sf,
    year,
    concavity_value,
    length_threshold_value,
    buffer_dist_value,
    cellsize_value,
    p_value_threshold_values
  )
})

# Combine the results into one data frame
result_df <- bind_rows(result_list)

result_df.sf <- result_df %>%
  st_as_sf(wkt = 'geometry', crs = 4326)

# Add date format for ArcGIS online
result_df.sf$year_new <- paste0(result_df.sf$year, "-01-02 00:00:00.000")
result_df.sf$year_new1 <- as.POSIXct(
  result_df.sf$year_new,
  format = "%Y-%m-%d %H:%M:"
)

View(result_df.sf)
plot(result_df.sf)

st_write(
  result_df.sf,
  "visualisation-data/somalia-hostpots/somalia-hotspots.shp"
)
