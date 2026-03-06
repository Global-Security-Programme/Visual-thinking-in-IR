## ACLED Ukraine data processing
## Date: July 2022

rm(list = ls())

library(tidyverse)


# Data  -------------------------------------------------------------------
# download Ukraine data from https://acleddata.com/conflict-data/data-export-tool
# select location: Ukraine
# select date range: 01/01/2018 - 08/07/2022

data <- read.csv("data/ACLED-data-Ukraine-raw.csv")

names(data)
head(data)
table(data$year)


names(data)

table(data$event_type)
table(data$sub_event_type)

data <- data %>% filter(fatalities >= 1)
data <- data %>% filter(event_type == "Battles")

# Actors selection --------------------------------------------------------

table(data$iso3)

focus_states <- c("UKR")

country.selection <- data %>%
  filter(iso3 %in% focus_states)

actors <- country.selection %>% distinct(actor1, actor2)

actors.list <- as.character(actors[, 1])

actors.selection.1 <- data %>%
  filter(actor1 %in% actors.list)

actors.selection.2 <- data %>%
  filter(actor2 %in% actors.list)


actors.selection.all <- rbind(actors.selection.1, actors.selection.2)

actors.selection.dist <- actors.selection.all %>%
  distinct(data_id, .keep_all = T)
actors.selection.dist

table(actors.selection.dist$iso3)

# New variables -----------------------------------------------------------

# Dyad
data$dyad_name <- paste0(
  as.character(data$actor1),
  " - ",
  as.character(data$actor2)
)

table(data$dyad_name)
data %>% distinct(dyad_name) %>% arrange(dyad_name)


# Civilians
data$event_civilians <- 0
data$event_civilians[grep("Civilians", data$actor1)] <- 1
data$event_civilians[grep("Civilians", data$actor2)] <- 1

table(data$event_civilians)
data %>% filter(event_civilians == 1)


# Russian military and police
data$event_russ_mil_pol <- 0
data$event_russ_mil_pol[grep("Military Forces of Russia ", data$actor1)] <- 1
data$event_russ_mil_pol[grep("Military Forces of Russia", data$actor2)] <- 1
data$event_russ_mil_pol[grep("Police Forces of Russia ", data$actor1)] <- 1
data$event_russ_mil_pol[grep("Police Forces of Russia", data$actor2)] <- 1

table(data$event_russ_mil_pol)
data %>% filter(event_russ_mil_pol == 1)


# Ukraine military and police
data$event_ukr_mil_pol <- 0
data$event_ukr_mil_pol[grep("Military Forces of Ukraine ", data$actor1)] <- 1
data$event_ukr_mil_pol[grep("Military Forces of Ukraine", data$actor2)] <- 1
data$event_ukr_mil_pol[grep("Police Forces of Ukraine ", data$actor1)] <- 1
data$event_ukr_mil_pol[grep("Police Forces of Ukraine", data$actor2)] <- 1

table(data$event_ukr_mil_pol)
data %>% filter(event_ukr_mil_pol == 1)


# Save data ---------------------------------------------------------------

write.csv(data, "visualisation-data/ukraine-visualisation.csv")
