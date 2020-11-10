## User 테이블
No | 컬럼명 | Type | Len | PK | FK | 참조테이블 | 참조컬럼
---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- 
1 | id | INTEGER |  | Y |  |  |  | 
2 | name | VARCHAR | 10 |  |  |  |
3 | email | VARCHAR | 45 |  |  |  |
4 | password | VARCHAR | 200 |  |  |  |
5 | salt | VARCHAR | 200 |  |  |  |


## Post 테이블
No | 컬럼명 | Type | Len | PK | FK | 참조테이블 | 참조컬럼
---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- 
1 | id | INTEGER |  | Y |  |  |  | 
2 | author | INTEGER |  |  | Y | User | id | 
3 | title | VARCHAR | 20 |  |  |  |
4 | contents | TEXT |  |  |  |  |
5 | createdAt | DATETIME |  |  |  |  |
6 | updatedAt | DATETIME |  |  |  |  |

## Like 테이블
No | 컬럼명 | Type | Len | PK | FK | 참조테이블 | 참조컬럼
---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- 
1 | id | INTEGER |  | Y |  |  |  | 
2 | userId | INTEGER |  |  | Y | User | id | 
2 | postId | INTEGER |  |  | Y | Post | id | 