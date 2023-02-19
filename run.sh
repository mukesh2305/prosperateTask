# Navigate to the collections directory
cd collections

# List the files in the directory and search for JSON files
files=$(ls | grep '.json')

# Iterate over the list of files and import each collection
for file in $files; do
    mongoimport --db dgaas_stats_data --collection  $(basename $file .json) --jsonArray --file $file
done
