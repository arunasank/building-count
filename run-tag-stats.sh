while read line
do
  count=$(osm-tag-stats --count --mbtiles='../united-states-of-america.mbtiles' --filter='filter/building.json')
  echo $count
done < bbox
