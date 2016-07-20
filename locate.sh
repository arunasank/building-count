while read line           
do           
    node script.js --place="$line"           
done < cities
