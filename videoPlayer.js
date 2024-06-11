window.addEventListener("load", () => {
    let videoId = "8b0ubLO2MUE";
    if (YT) {
      // this YT.player takes div id
      // & object which is having information
      // like width, height, videoId
      new YT.Player("video-player", {
        height: "500",
        width: "1000",
        videoId,
        events: {
          onReady: (e) => {
            e.target.playVideo();
          },
        },
      });
    }
  });