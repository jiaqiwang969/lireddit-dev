# learning lireddit
start from 
```
git clone https://github.com/benawad/lireddit.git
git reset --hard 183708fa0692f5bdc5a32b3b61b94bc594206dbe
yarn add class-validator
```

```
brew install redis
redis-server
```

```
$ dropdb development_db_name
$ createdb development_db_name
```
数据库基本操作：https://www.jianshu.com/p/fedda9824f6a
```
#安装数据库
brew install postgresql 
#初始化 PostgreSQL
initdb /Users/wjq/LocalDB/LocalPostgreSQL -E utf8
#启动
pg_ctl -D /Users/wjq/Database/postgres -l logfile start
```


```
npm init -y
npx tsconfig.json
```

创建数据库:建议安装postgres app
```
createdb wjq // 整个环境
createdb lireddit // 用到项目上的数据库名称
dropdb // 如果需要删除数据库的话

npx mikro-orm migration:create 
//Migration20210711145123.ts successfully created
```

