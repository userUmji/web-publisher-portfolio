// 모달창 부모
modal_wrap = document.querySelector(".modal-wrap");
// 실제 모달
modals = document.querySelectorAll(".modal");
// 모달 창 닫기 버튼
close_btns = document.querySelectorAll(".close-btn");
// 상세보기 버튼
view_details_btns = document.querySelectorAll(".view-details-btn");
// 상세보기 버튼 클릭시 모달창 on
view_details_btns.forEach((detail_btn, index) => {
  detail_btn.addEventListener("click", () => {
    for (modal of modals) {
      modal.classList.remove("active");
    }
    modal_wrap.classList.add("active");
    modals[index].classList.add("active");
  })
})
// x버튼 클릭시 모달창 off
close_btns.forEach((close_btn, index) => {
  close_btn.addEventListener("click", () => {
    modal_wrap.classList.remove("active");
    modals[index].classList.remove("active");
  })
})

// 프로젝트 카테고리 버튼
let category_btns = document.querySelectorAll(".category-btn-wrap > button");
// 각 프로젝트 카드들
let project_cards = document.querySelectorAll(".card-wrap > .card");
// 카데고리 클릭시 그에 맞는 카드만 on
category_btns.forEach((category_btn) => {
  category_btn.addEventListener("click", () => {
    // 카테고리 버튼 전부 off
    for (cb of category_btns) {
      cb.classList.remove("active");
    }
    // 카테고리 버튼 on표시
    category_btn.classList.add("active");
    // 전체보기 카테고리 클릭했으면
    if (category_btn.dataset.type == "all") {
      // 전부 on
      for (pc of project_cards) {
        pc.classList.add("active");
      }
      return;
    }
    // 카드 데이터 타입을 담을 변수
    let type_matching_list = "";
    for (pc of project_cards) {
      // 타입이 같은지 판별하기전 off
      pc.classList.remove("active");
      // 데이터타입을 가져와서 ,기준으로 나눠줌
      type_matching_list = pc.dataset.type.split(",");
      // 데이터 타입의 수만큼 반복
      for (let i = 0; i < type_matching_list.length; i++) {
        // 카테고리 타입과 카드의 데이터 타입이 같으면 on
        if (type_matching_list[i] == category_btn.dataset.type) {
          pc.classList.add("active");
          break;
        }
      }
    }
  })
})

// 네비게이션
let navigation_li = document.querySelectorAll(".navigation > li > a");

// 네비게이션 클릭해면 active 클래스 추가
navigation_li.forEach(nav_li => {
  nav_li.addEventListener("click",()=>{
    for(nl of navigation_li){
      nl.classList.remove("active");
    }
    nav_li.classList.add("active");
  })
});
// 탑버튼
let top_btn = document.querySelector(".top-btn");
document.addEventListener("scroll", () => {
  // 각 섹션들 위치 가져오기
  let about = document.getElementById("about").offsetTop;
  let project = document.getElementById("project").offsetTop;
  let contact = document.getElementById("contact").offsetTop;
  
  // active클래스 초기화
  for(nl of navigation_li){
    nl.classList.remove("active");
  }
  // 스크롤 위치 에따라 네비게이션에 active클래스 추가
  let scroll_y = window.scrollY;
  if (scroll_y > contact + -500) {
    navigation_li[2].classList.add("active");
  }
  else if (scroll_y > project + -300) {
    navigation_li[1].classList.add("active");
  }
  else if (scroll_y > about + -300) {
    navigation_li[0].classList.add("active");
  }

  // 스크롤이 어느정도 내려가면 top버튼 활성화
  if(scroll_y > 200){
    top_btn.classList.add("active");
  }
  else{
    top_btn.classList.remove("active");
  }
})

