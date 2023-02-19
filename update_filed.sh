#! /bin/bash

# Loop through all JSON files in the current directory
for file in *.json; do
  # Read the contents of the file into a variable
  contents=$(cat "$file")

  # Use jq to update the desired field in all objects in the array
  updated=$(echo "$contents" | jq 'map(.details.attributes = ["Email", "IBAN", "LineageGuid", "UK NINo", "US SSN", "UK IBAN"])')

  # Write the updated JSON back to the file
  echo "$updated" > "$file"
done
