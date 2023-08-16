# Create data
`curl -X POST https://30vg7a7fg2.execute-api.us-east-1.amazonaws.com/dev/create -H "Content-Type: application/json" -d '{"id": "1", "info": "Sample info"}'
`

# Get data with curl
`curl -X POST https://30vg7a7fg2.execute-api.us-east-1.amazonaws.com/dev/create -H "Content-Type: application/json" -d '{"id": "1", "info": "Sample info"}'
`

# Update data with curl
`curl -X PUT https://30vg7a7fg2.execute-api.us-east-1.amazonaws.com/dev/read/1 -H "Content-Type: application/json" -d '{"info": "Updated info"}'
`

# Delete 
`curl -X DELETE https://30vg7a7fg2.execute-api.us-east-1.amazonaws.com/dev/read/1
`
