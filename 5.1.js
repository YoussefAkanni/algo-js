let userInfo = {
  nameTvSeries: "",
  productionYear: "",
  actorName: "",
};

let confirm = 0;

function askTvSerie() {
  userInfo.nameTvSeries = prompt("What's your favorite tv serie ?");
  userInfo.productionYear = prompt("The production year ?");
  userInfo.actorName = prompt("And the cast members ?");
  confirm = prompt("done ? yea/no");
  if (confirm == "yea") {
    return;
  } else {
    userInfo.actorName + prompt("a other member");
  }
}

askTvSerie();

console.log(userInfo);
