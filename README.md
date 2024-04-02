# 어쩔트리

> 크리스마스 트리의 위치를 공유해보세요! 👉 https://whereismytree.me/

![cover](https://github.com/KwanBeom/readmetest/assets/126222927/1c28fa50-51f8-4350-b838-65c2249f706e)


## 📖 프로젝트 소개
크리스마스 트리의 위치를 등록해 전국의 유저들에게 공유하고, 리뷰를 남겨 생생한 후기를 사용자들과 나누는 커뮤니티 기반의 서비스입니다. 

## 목차
1. [시작하기](#시작하기)
2. [주요 기능 소개](#주요-기능-소개)
3. [사용 기술](#사용-기술)
4. [폴더 구조](#폴더-구조)

## 시작하기
```
git clone https://github.com/whereismytree/frontend.git
```

```
npm install
```

### Dev Mode
```
npm start
```

### Production
```
npm run build
```

## 주요 기능 소개

### 크리스마스 트리 등록
- 위치를 검색하거나 현재 위치로 설정합니다.
- 지도를 기반으로 트리를 등록할 수 있습니다.
- 트리의 상세정보를 기입할 수 있습니다.
  
  ![위치 등록](https://github.com/KwanBeom/readmetest/assets/126222927/dfa586b1-1d88-4175-add8-82a0336a03f9) ![트리등록](https://github.com/KwanBeom/readmetest/assets/126222927/7d1e6009-c54c-46f4-a649-b8dd138d99d7) <img width="200" alt="image" src="https://github.com/KwanBeom/readmetest/assets/126222927/8003b589-fcef-4d92-9080-222482f7d0f6">



### 트리 리뷰 등록
- 사진과 함께 트리에 대한 간단한 리뷰를 남길 수 있습니다.

  ![후기 등록](https://github.com/KwanBeom/readmetest/assets/126222927/79e1c036-8409-447a-9b7a-dd7781022e34)


### 트리 저장
- 등록된 트리를 저장하고 저장해둔 트리를 간편하게 확인할 수 있습니다.
  
  ![트리 저장](https://github.com/KwanBeom/readmetest/assets/126222927/7d2edf45-821e-468e-a336-91fffaad39fa)
  <img width="200" alt="image" src="https://github.com/KwanBeom/readmetest/assets/126222927/1cd06b84-001c-4876-8c40-be171c559b79">


### 크리스마스 트리 찾기
- 지도에서 등록된 크리스마스 트리를 찾을 수 있습니다.
- 위치 및 트리 이름으로 검색해 트리를 찾을 수 있습니다.

  ![트리검색](https://github.com/KwanBeom/readmetest/assets/126222927/3729b20d-b31a-4fb4-b0a7-02f920d5f91b) ![메인 페이지 트리 탐색](https://github.com/KwanBeom/readmetest/assets/126222927/8b7e3e97-919d-46d4-a94c-892611b88abd)




 


## 사용 기술

-   **Language**: TypeScript
-   **Library & Framework**  : React, TanStack-Query
-  **Style**: Styled-components
-  **Deploy**: AWS S3 + CloudFront
- **DevOps**: Github Actions


## 폴더 구조

```
📦src  
 ┣ 📂assets  
 ┣ 📂components  
 ┃ ┗ 📂common  
 ┣ 📂constants  
 ┣ 📂error  
 ┣ 📂hooks  
 ┣ 📂pages  
 ┃ ┣ 📂ErrorPage  
 ┃ ┣ 📂LandingPage  
 ┃ ┣ 📂LoginPage  
 ┃ ┣ 📂MyPage  
 ┃ ┣ 📂MyReviewPage  
 ┃ ┣ 📂MyTreePage  
 ┃ ┣ 📂ReviewDetailPage  
 ┃ ┣ 📂ReviewRegistAndEditPage  
 ┃ ┣ 📂SavedTreePage  
 ┃ ┣ 📂SearchPage  
 ┃ ┣ 📂TreeInfoPage  
 ┃ ┗ 📂TreeRegistPage  
 ┣ 📂routes  
 ┣ 📂store  
 ┣ 📂style  
 ┣ 📂types  
 ┣ 📂utils  
 ┣ App.tsx  
 ┣ index.css  
 ┗ index.tsx  
 ```

## 팀원

- 유재영([zxxng](https://github.com/zxxng))
-  최범관([KwanBeom](https://github.com/KwanBeom))

