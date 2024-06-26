## 블로그 서버 레포지토리

### 소개

시연영상 : https://youtu.be/PC7rBfvsbHY

클라이언트 코드 : https://github.com/toy-project-kyungsle/my-blog-client

이미지 서버 코드 : https://github.com/toy-project-kyungsle/my-blog-image-server

#### ⭐⭐ 이 프로젝트는 라즈베리파이에서 실행하기 위해서 제작했던 프로젝트입니다. ⭐⭐

개인 블로그를 직접 만들어보기 위하여 제작한 블로그 서버 레포지토리입니다.

NestJS를 사용했으며, 노션과 비슷한 스타일로 작성 가능합니다. 기능은 아래와 같습니다.

- 글 추가, 삭제, 수정 API
- 글을 ID 혹은 카테고리 별로 조회하기

운영 중 수많은 문제들을 만났습니다.

1. home server는 80번 포트를 열기 위해서 네트워크의 관리 회사와 연락을 해야한다는 점
2. 운영은 유지보수의 반복이다. 라즈베리파이는 내버려두면 고장난다. 고장나기 전에 계속 확인해야 한다.
3. 몇 개월 동안 node 버전, dpkg 오류, 포트 문제 등을 겪었으며 수많은 포맷이 있었습니다.
4. 그러다가 든 생각이 '이 서비스는 나만 사용하는 서비스인데 유지보수에 계속 시간을 쓸 바에는 회사 프로덕트 연구에 시간을 쓰는게 더 좋겠다' 였습니다.
5. 언젠가 다시 할 수도 있지만 당분간은 멈추어두려고 합니다.

### 사용 방법

env에 API 포트 및 이미지 포트를 적어둡니다.

```md
MYSQL_HOST=...
MYSQL_PORT=...
MYSQL_USER=...
MYSQL_DATABASE="..."
MYSQL_PASSWORD="..."
HOST_PORT=...
```

이제 실행시키면 됩니다!

```shell
npm i
npm start
```
