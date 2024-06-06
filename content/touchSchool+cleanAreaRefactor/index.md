---
emoji: 🌊
title: touchSchool / cleanArea 리팩토링 회고
date: '2024-04-17 1:02:30'
author: 최동호
tags: 블로그 github-pages hamfan524
categories: Refactorings
---

## ❗️개요

### GitHub url

[터치스쿨](https://github.com/hamfan524/TouchSchool)

[청정구역 깃허브](https://github.com/hamfan524/PJ2T6_CleanArea)


### 시연 영상 및 앱스토어 링크

[청정구역 유튜브](https://www.youtube.com/watch?v=PvNcrDeFqQE)

[청정구역 앱스토어](https://apps.apple.com/kr/app/touchschool-%ED%84%B0%EC%B9%98-%ED%84%B0%EC%B9%98-%ED%95%99%EA%B5%90%EB%8C%80%ED%95%AD%EC%A0%84/id6474486132)


[파도 리팩토링](https://hamfan524.github.io/PadoRefactor/)를 진행할 때, 내 파트 작업이 끝나면 시간날 때 마다 틈틈히 TouchSchool 앱과 CleanArea 앱을 리팩토링 진행하였다. 

사실 파도 프로젝트에 비하면, 작은 앱들이지만 코드들을 보면 오히려 이쪽이 더 막막했었다.

개요지만 이번 회고를 요약하자면.. 디자인과 기능이 같은 새 프로젝트라고 볼 수 있다.

우선 두 프로젝트 둘 다 MVVM 패턴이 적용되어 있었지만, TCA 아키텍처에 관심이 많아 혼자 공부를 하며 적용하였다.

## 🐞 문제 정의

TCA 아키텍처를 적용하여 리팩토링을 하기 전, 몇가지 문제가 있었다.

첫 번째는 당연하게도 TCA에 대한 이해도의 부족함이었고,

두 번째는 이전에 프로젝트를 진행했던 touchSchool과 cleanArea의 코드들이 난장판인 상황이었다.

예를 들면

    1. 정말 많은 데드코드
    2. 의미없는 뷰모델의 중복 정의
    3. DI 컨테이너로 위에서부터 주입하는 방식이 아닌 싱글톤으로 사용중인 클래스들
    4. 화면 별로 작업한 분들이 달라 코드 통일성이 전혀 없음

위 4가지 외에도 보면서 아니 이걸 왜 이렇게 했지? 싶은 코드들이 너무 많았다.

그리고, 또 다른 문제는 프로젝트를 진행했던 분들은 다른 일을 하시느라 바쁘셔서 거의 혼자 진행해야 했다.

어쩔 수 없이, 혼자 진행하려다 CleanArea 프로젝트를 진행했던 분 한분도 TCA에 관심이 있어 같이 둘이서 진행하였다.

## 👏🏻 리팩토링 진행

TCA에 대한 학습은 공식 튜토리얼을 보면서 학습하였고, TCA에 관심이 있는 다른분들과 함께 공부를 하였다.

밤에 같이 모여서 코드들을 하나하나 뜯어보며 이해하였고, 어떻게 동작하는지 이해한 내용을 같이 대화하며 학습하고,

샘플 프로젝트를 만들면서 사이드이펙트를 다뤄보고, 테스트 코드도 작성하면서 TCA에 익숙해 질 수 있었다.

그 이후, 두 프로젝트 둘 다 거의 새로 뜯어고치 듯이 리팩토링을 진행하였다.

같이 작업했던 분들이 없어, 다른분들의 코드들을 이해하면서 고치는거보다 새로 만드는게 더 빠르다는 결론을 내려, UI를 그리는 코드 외에는 거의 다 새로 작성한거 같다.

우선 싱글톤 패턴을 모두 없애고, 위에서부터 의존성을 주입하는 코드를 작성하였다.

외에도 기존코드에서 메모리 관련하여 문제가 있던 부분들도 하나하나 찾아 처리해주었다.

두개 앱 둘 다 리팩토링을 진행하면서 진짜 육성으로 '와~' 소리를 얼마나 했는지 모르겠다.

'내가 왜 저렇게 작성했었지?' 라는 부분도 보이고, '아니 데이터를 이렇게 받아와서 사용했다고?' 싶은 부분들이 너무 많았다.

그땐 그냥 원하는대로 돌아만 가면 된다는 생각에 막 만들었던 기억이 났고, 많이 반성하면서 로직들은 거의 다 새로 엎었다.

## ⛳️ CleanArea 트러블 슈팅

청정구역 앱은 트러블 슈팅이라 할게 별로 없었다.
사실 지금 작성하는 부분도 청정구역 앱을 먼저 리팩토링을 시작해서, TCA에 대한 이해도가 많이 부족했던 탓에 생겼던 문제이다.

1. 문제 정의
    - 네비게이션을 이용한 뷰 이동이 제대로 작동되지 않던 오류
2. 사실 수집
    - StartView에서 MainView로의 이동은 되는데 그 MainView안에 있는 탭뷰 아이템들에서 새로 네비게이션이 열리지 않음
3. 원인 추론
    - TCA아키텍처에서는 네비게이션 패스가 선언되어있는 스택안에서 새로운 네비게이션 스택을 생성하는게 불가능함
4. 해결방법
    - 최상위 스토어에서 스택을 쌓을 수 있는 Path를 생성
    - 이동할 화면을 Path에 추가하고 dismiss로 Path에서 제거하는 방식으로 네비게이션 구현

### 해결 코드
- 리듀서
    - `State`: 네비게이션을 위한 경로 상태를 관리. StackState<Path.State>를 사용하여 현재 네비게이션 스택을 추적
    - `Action`: openMain 액션은 메인 화면으로의 경로를 추가하는 데 사용. path 액션은 네비게이션 스택의 변경을 관리
    - `body`: openMain 액션을 받았을 때, 메인 화면으로의 경로를 네비게이션 스택에 추가하여 네비게이션 상태 변경
```Swift
@Reducer
struct StartFeature {
    @ObservableState
    struct State: Equatable {
        var path = StackState<Path.State>()
    }
    
    enum Action {
        case openMain
        case path(StackAction<Path.State, Path.Action>)
    }

    var body: some ReducerOf<Self> {
        
        Reduce { state, action in
            switch action {
           
            case .openMain:
                // Main 화면으로의 경로를 path 스택에 추가합니다.
                state.path.append(.mainScene(MainFeature.State(
                    policies: state.result
                )))
                return .none
                
            case let .path(action):
                // Path 액션을 처리합니다. 여기서는 화면 전환 로직을 추가할 수 있습니다.
                switch action {
                default:
                    return .none
                }
            }
            
        }
        .forEach(\.path, action: \.path) {
            Path()
        }
    }
}

extension StartFeature {
    @Reducer
    struct Path {
        @ObservableState
        enum State: Equatable {
            case mainScene(MainFeature.State)
        }
        
        enum Action {
            case mainScene(MainFeature.Action)
        }
        
        var body: some ReducerOf<Self> {

            Scope(state: \.mainScene, action: \.mainScene) {
                MainFeature()
            }
        }
    }
}
```
- 뷰
    - `NavigationStack`: TCA의 NavigationStack을 사용하여, 스토어의 상태를 바탕으로 동적으로 화면을 전환
        - path 파라미터에 바인딩된 스토어의 상태를 통해 네비게이션 스택을 관리
    - `destination`: 경로 상태에 따라 표시할 화면을 결정
        - 예를 들어, 상태가 .mainScene일 때 MainView를 표시

```Swift
NavigationStack(path: $store.scope(state: \.path, action: \.path)) {
                VStack {
                    // 화면 구성
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 20)
            } destination: { store in
                switch store.state {
      
                    
                case .mainScene:
                    if let store = store.scope(state: \.mainScene, action: \.mainScene) {
                        MainView(store: store)
                    }
                }
            }
```


## 💨 TouchSchool 트러블 슈팅

오히려 터치스쿨 쪽이 청정구역보다 더 문제가 많았다.

1. 문제 정의
    - 자식 리듀서와 공유하고 있는 부모 리듀서의 state값이 변해도 자식리듀서에서 값이 업데이트 되지 않는 오류
2. 사실 수집
    - MainFeature에서 스냅샷 리스너로 바라보고 있는 랭킹 데이터가 업데이트 되어도 RankFeature에서 공유받고 있는 랭킹 데이터는 업데이트 되지 않음
3. 원인 추론
    - 일반적으로 부모 리듀서가 자식 리듀서에게 값을 전달해주는 방식으로는, 부모 리듀서에서 state값의 상태 변화를 자식 리듀서는 알 수 없음
4. 해결방법
    - SharedState 사용법을 학습하지 못해, 다른 방식으로 해결
    - 메인 path에서 추가되는 리듀서가 최대 1개씩 추가되는 경우밖에 없어, 직접 찾아서 업데이트 해주는 방식을 사용
    - 부모리듀서에서 state의 값이 변할 때, Path에서 키값 ID를 찾아서 해당 자식리듀서를 업데이트 해줌
    - 현재 PointFree 강의를 구매해 SharedState 사용방법을 학습 중

### 해결 코드 

```Swift
// 전역으로 pathId 선언
var pathId: String = ""

// 부모 리듀서
@Reducer
struct MainFeature {
    @ObservableState
    struct State: Equatable {
        var mySchool: SchoolInfo = .init(name: "", adres: "", seq: "", count: 0)
        var mySchoolRank: Int = 0
        var schools: IdentifiedArrayOf<School> = []
        var schoolInfo: IdentifiedArrayOf<SchoolInfo> = []
        var path = StackState<Path.State>()
    }
    
    enum Action {
        // 나머지 액션들
        
        case openRankView
        case path(StackAction<Path.State, Path.Action>)
        case rankDataResponse([SchoolInfo])
    }
    
    @Dependency(\.firestoreAPI) var firestoreAPI

    var body: some ReducerOf<Self> {
        Reduce { state, action in
            switch action {

            // 나머지 로직
                
            // 처음 랭킹뷰 열 때 스택에 추가
            case .openRankView:
                pathId = "rank"
                state.path.append(.rankScene(RankFeature.State(
                    mySchool: state.mySchool,
                    mySchoolRank: state.mySchoolRank,
                    schoolInfo: state.schoolInfo
                )))
                return .none
                
            case let .rankDataResponse(schoolInfo):
                
                if !state.path.isEmpty {
                    let key = state.path.ids.first!
                    
                    // state값이 변하면, pathId에 따라 id값을 찾아서 해당 리듀서를 업데이트
                    switch pathId {
                    case "game":
                        state.path[id: key] = .gameScene(GameFeature.State(
                            mySchool: state.mySchool,
                            mySchoolRank: state.mySchoolRank,
                            schoolInfo: state.schoolInfo
                        ))
                        
                    case "rank":
                        state.path[id: key] = .rankScene(RankFeature.State(
                            mySchool: state.mySchool,
                            mySchoolRank: state.mySchoolRank,
                            schoolInfo: state.schoolInfo,
                            openAdView: false
                        ))
                        
                    default:
                        break
                    }
                }
                
                return .run { send in
                    try await send(.dataResponse(self.searchResult.fetch([eSchoolUrl, mSchoolUrl, hSchoolUrl])))
                }
                
            }
        }
        .forEach(\.path, action: \.path) {
            Path()
        }
    }
}

// 자식 리듀서
@Reducer
struct RankFeature {
    @ObservableState
    struct State: Equatable {
        var mySchool: SchoolInfo = .init(name: "", adres: "", seq: "", count: 0)
        var mySchoolRank: Int = 0
        var schoolInfo: IdentifiedArrayOf<SchoolInfo> = []
    }
    
    enum Action {
        case tabBackButton
    }
    
    @Dependency(\.dismiss) var dismiss

    var body: some ReducerOf<Self> {
        Reduce { state, action in
            switch action {
            case .tabBackButton:
                return .run { _ in
                    await self.dismiss()
                }
            }
        }
    }
}
```
## 🤪 후기

두 개의 앱을 거의 동시에 리팩토링 진행하였는데, 리팩토링보다는 새로 만드는 느낌이 강했던 작업이었다.
디자인 패턴을 바꾼 이유도 있지만, 그거보단 그냥 로직들이 숨이 턱 막히는 로직이 많았었다...

이번 2개의 앱을 리팩토링하며 느낀건, 내가 개발자로써 많이 성장했다는것 + 저 시기에 나는 앱을 배포할 개발자로써의 준비는 덜 되어 있었다는 점이다. 

이제 CleanArchitecture+MVVM/C 패턴을 적용한 UIKit 프로젝트를 진행하려 하는데, 프로젝트가 끝난 후에 다시 터치스쿨, 청정구역, 파도 앱을 보면서 지금 이 시기의 나는 많이 부족했다는걸 또 깨닫지 않을까 싶다.


```toc
```