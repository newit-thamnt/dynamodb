# STEP TO SETUP LOCALSTACK

1. Run command `docker compose up -d`
2. Go to `http://localhost:4566/health` to check service



# SPECS

## premise
Go to `resources` folder, then run bash `init-data.sh`

**Note**: If have permission error, need chown permission for this file


## dynamodb
1. Go to `http://localhost:8001/` to check result
  - 2 table:
    + TableHasSearchKey
    + TableNotHasSearchKey

### TableHasSearchKey
Specs:
  - CRUD
    => write code to generate 100 items
    => Has 10 `hash_key` from `hash_1` to `hash_10`
    => Each `hash_key` has 10 items with `range_key` from `rg_1` to `rg_10`
    + Example
        =================================
        | hash_key  | range_key | value |
        | hash_1    | rg_1      | 11    |
        | hash_1    | rg_2      | 12    |
        | ...       | ...       | ...   |
        | hash_10   | rg_10     | 1010  |
  
  - Query:
    => Query item has `hash_5` + `rg_5` => return value ( expect 55 )
    => Query all items has hash `hash_7`

## s3
After calling s3, s3 now has 1 bucket `s3-bucket-sample` and 1 file `json-data.json`
Try:
  - Writing code to read data from this file
  - Convert json to csv file ( use library `json2csv` )
  - Upload file to `s3-bucket-sample` with name `table-data.csv` ( see sample files in resources )
