module.exports = {
  title: `개발하는 부산청년😎`,
  description: `멋쟁이가 되어가는 중`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.hamfan524.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `hamfan524/hamfan524.github.io`, // `hamfan524/hamfan524-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `최동호`,
    bio: {
      role: `iOS 개발자`,
      description: ['소통과 함께 발전하는', '새로움을 좋아하는', '즐거움을 추구하는'],
      thumbnail: 'dongho.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/hamfan524`, // `https://github.com/hamfan524`,
      linkedIn: `https://www.linkedin.com/in/dev-ios-dongho-879a04299/`, // ``,
      email: `donghochoi312@gmail.com`, // `donghochoi312@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
   
      {
        date: '24.04.03 ~ 24.04.08',
        activity: 'TouchSchool 앱 리팩토링',
        links: {
          post: 'https://hamfan524.github.io/touchSchool/',
          github: 'https://github.com/hamfan524/TouchSchool',
          appStore: 'https://apps.apple.com/kr/app/touchschool-%ED%84%B0%EC%B9%98-%ED%84%B0%EC%B9%98-%ED%95%99%EA%B5%90%EB%8C%80%ED%95%AD%EC%A0%84/id6474486132',
        },
      },
      {
        date: '24.03.25 ~ 24.04.03',
        activity: '청정구역 앱 리팩토링',
        links: {
          post: 'https://hamfan524.github.io/cleanArea/',
          github: 'https://github.com/hamfan524/PJ2T6_CleanArea',
          appStore: '',
        },
      },
      {
        date: '24.03.06 ~ 24.04.11',
        activity: 'PADO 앱 리팩토링',
        links: {
          post: '',
          github: 'https://github.com/4T2F/PADO',
          appStore: '',
        },
      },
      {
        date: '24.03.02 ~ ',
        activity: 'Eighteen 앱 시작',
        links: {
          post: '',
          github: 'https://github.com/LayTheGroundWork',
          appStore: '',
        },
      },
      {
        date: '24.01.02 ~ 24.03.06',
        activity: 'PADO 앱 개발',
        links: {
          post: '',
          github: 'https://github.com/4T2F/PADO',
          appStore: '',
        },
      },
      {
        date: '23.12.05 ~ 23.12.15',
        activity: '청정구역 앱 개발',
        links: {
          post: 'https://hamfan524.github.io/cleanArea/',
          github: 'https://github.com/hamfan524/PJ2T6_CleanArea',
          appStore: '',
        },
      },
      {
        date: '23.10.11 ~ 23.12.04',
        activity: 'TouchSchool 앱 개발',
        links: {
          post: 'https://hamfan524.github.io/touchSchool/',
          github: 'https://github.com/hamfan524/TouchSchool',
          appStore: 'https://apps.apple.com/kr/app/touchschool-%ED%84%B0%EC%B9%98-%ED%84%B0%EC%B9%98-%ED%95%99%EA%B5%90%EB%8C%80%ED%95%AD%EC%A0%84/id6474486132',
        },
      },
      {
        date: '2023.09 ~ 2023.02',
        activity: '앱 스쿨: iOS 3기 참여',
        links: {
          post: '',
          github: 'https://github.com/APP-iOS3rd',
          demo: '',
        },
      },
      {
        date: '2023.02.10 ~',
        activity: 'CS 공부 시작',
        links: {
          post: '',
          github: 'https://github.com/hamfan524/Today-We-Learn',
          demo: '',
        },
      },
      {
        date: '23.01.26 ~ 23.02.02',
        activity: 'Diary(UIKit) 개발',
        links: {
          post: '',
          github: 'https://github.com/hamfan524/Diary',
          demo: '',
        },
      },
      {
        date: '22.09.01 ~ 22.11.31',
        activity: '(주)엠바스에서 3개월 인턴생활',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '21.11.21 ~ 21.12.17',
        activity: 'S-DES 시뮬레이터(UIKit) 개발',
        links: {
          post: '',
          github: 'https://github.com/hamfan524/S-DES-Simulator',
          demo: '',
        },
      },
      {
        date: '2021.11 ~',
        activity: 'iOS 개발 공부 시작 & 알고리즘 공부 시작',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'PADO - 파도,  내가 꾸미는 친구의 공간',
        description: '꾸민 모습이 아닌, 자신의 진짜 모습을 보여줄 수 있는 SNS 앱이 만들고 싶어 진행하게 된 프로젝트입니다.',
        techStack: ['SwiftUI', 'Firebase', 'KingFisher', 'Lottie'],
        thumbnailUrl: 'pado.png',
        links: {
          post: 'https://hamfan524.github.io/Pado/',
          github: 'https://github.com/4T2F/PADO',
          googlePlay: '',
          appStore: 'https://apps.apple.com/kr/app/pado-%ED%8C%8C%EB%8F%84/id6475384446',
          demo: '',
        },
      },
      {
        title: '멋쟁이사자처럼 iOS 3기 수료 후기 ',
        description: '길지 않은 기간동안 많은 일이 있었던 멋쟁이 사자처럼 iOS 앱 스쿨에 대해 나의 솔직한 후기',
        techStack: [],
        thumbnailUrl: 'likeLion.png',
        links: {
          post: 'https://hamfan524.github.io/LikeLion/',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: '청정구역 - 청년들을 위한 정책을 알려주는 청정구역',
        description: '내 정보를 입력하면 내가 혜택을 받을 수 있는 정책 정보들을 알려주는 앱이 있으면 좋겠다는 생각을 시작으로 팀원들이 모여 진행하게 된 프로젝트입니다.',
        techStack: ['SwiftUI'],
        thumbnailUrl: 'cleanArea.png',
        links: {
          post: 'https://hamfan524.github.io/cleanArea/',
          github: 'https://github.com/hamfan524/PJ2T6_CleanArea',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        title: 'TouchSchool - 터치!터치!학교대항전!',
        description: '같이 공부하는 팀원분들과 함께 진행하며 배포까지 된 프로젝트 회고입니다.',
        techStack: ['SwiftUI', 'Firebase', 'Alamofire'],
        thumbnailUrl: 'touchSchool.png',
        links: {
          post: 'https://hamfan524.github.io/touchSchool/',
          github: 'https://github.com/hamfan524/TouchSchool',
          googlePlay: '',
          appStore: 'https://apps.apple.com/kr/app/touchschool-%ED%84%B0%EC%B9%98-%ED%84%B0%EC%B9%98-%ED%95%99%EA%B5%90%EB%8C%80%ED%95%AD%EC%A0%84/id6474486132',
          demo: '',
        },
      },
    ],
  },
};
