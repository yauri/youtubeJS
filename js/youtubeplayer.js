/**
 * Created with JetBrains WebStorm.
 * User: Yauri
 * Date: 1/21/13
 * Time: 11:46 PM
 * To change this template use File | Settings | File Templates.
 */

function YoutubePlayer(width, height){
    this.width = width || 640;
    this.height = height || 480;
}

YoutubePlayer.prototype.setYoutubePlayer = function(playerId){
    this.player = document.getElementById(playerId);
}

YoutubePlayer.prototype.loadVideo = function(){

}

YoutubePlayer.prototype.playVideo = function(){

}

YoutubePlayer.prototype.pauseVideo = function(){

}

YoutubePlayer.prototype.muteVideo = function(){

}

YoutubePlayer.prototype.unmuteVideo = function(){

}
