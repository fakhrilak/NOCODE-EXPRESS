export "controllers_name"="controllers"
export "opensearch_url"="https://admin:admin@172.31.127.34:9200"
mkdir ../$controllers_name
export "path_controllers"=$controllers_name
python3 convertSringtoCode.py
python3 buildMapping.py