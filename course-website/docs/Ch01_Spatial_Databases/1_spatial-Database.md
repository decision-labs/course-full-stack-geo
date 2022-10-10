---
sidebar_position: 1
---

# Spatial Database

Spatial Databases store geographic information in the relational format including coordinates and topologies(vectors and raster forms). There are two ways to represent data i.e. vectors and raster. Vector is high-quality geographical data, raster used to show patterns, made available large sets of data.

## PostGIS

PostGIS is a spatial database and an extension of PostgreSQL. It is used to perform CRUD operations on GIS data. PostGIS extends PostgreSQL by adding three new features: spatial indexes, spatial types, and spatial functions.

## Installing PostGIS

1. Go to https://www.pgadmin.org/ and download the latest version of pgAdmin for your system
2. Download PostgreSQL from https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
3. Follow downloading steps from https://postgis.net/workshops/postgis-intro/installation.html.

## Gather some data

1. Go to https://overpass-turbo.eu/
2. Select data of your choice. (Like buildings=\*)
3. Download data in the form of GeoJson
4. Place anywhere in you local storage.
5. Query for our course https://overpass-turbo.eu/s/1l0U to download lahore's neighbourhoods


## Creating Server and databases

1. Install OGR2OG. (Using brew on Mac.) ([On Windows](https://www.youtube.com/watch?v=CDN9MRuuf9k&ab_channel=TheGeospatials))
2. Open pgAdmin.
3. Create Database.
4. Type your password of the master user you created while installing
5. Right Click on servers > Register > Server...

![](./videos/2022-08-15-15-23-55-connect-to-db-pgadmin.gif)


## Download some data

```sh
ogr2ogr -f "PostgreSQL" PG:"dbname=lahore_db user=postgres password=1234" path/lahore-neighbourhoods.geojson -nln lahore_neighbourhoods
```
Path in above command is used for complete path like C:/Downloads/data.geojson/
## Query data
