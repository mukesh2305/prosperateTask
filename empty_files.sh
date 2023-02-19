#! /bin/bash

# Loop through all JSON files in the current directory
for file in *.json; do
  # Write an empty JSON object to the file
  echo '{}' > "$file"
done
