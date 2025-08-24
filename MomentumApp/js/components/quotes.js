const quotes = [
  {
    quote: "남들이 우리와 다르게 살아가고 행동하며 경험한다는 사실을 알고 이에 기뻐하는 것이 사랑 아니고 무엇이겠는가?",
    author: "프레드리히 니체",
  },
  {
    quote: "가장 비참하고 보잘 것 없어보이는 사람들이 대개 가장 야심차고 질투가 많다.",
    author: "바뤼흐 스피노자",
  },
  {
    quote: "행동만이 삶에 힘을 주고, 절제만이 삶에 매력을 준다.",
    author: "장 폴 리히터",
  },
  {
    quote: "비전만 쫓다 보니 방향을 잃었다.",
    author: "로빈 그린",
  },
  {
    quote: "유붕자원방래 불역락호",
    author: "공자",
  },
  {
    quote: "책 없는 방은 영혼 없는 육체와도 같다.",
    author: "키케로",
  },
  {
    quote: "작별 인사에 낙담하지 말라. 재회에 앞서 작별은 필요하다. 그리고 친구라면 잠시 혹은 오랜 뒤라도 꼭 재회하게 될 터이니.",
    author: "리처드 바크",
  },
  {
    quote: "시간은 인간이 쓸 수 있는 가장 값진 것이다.",
    author: "테오프라스토스",
  },
  {
    quote: "호레이쇼. 천지간에는 자네의 철학으로 상상하는 것보다 많은 것들이 있다네.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "난 위험에 대해 그리 많이 생각지 않는다. 난 그저 내가 하고 싶은 것을 할 뿐이다. 앞으로 나아가야 한다면, 나아가면 된다.",
    author: "릴리언 카터",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;
