/**
	GRADLE - KNOWLEDGE IS POWER
	***** PROPRIETARY CODE *****
	@author : gradle (gradlecode@outlook.com)
	@update: 02/07/2019 12:39:00
	@version_name: gradle-logic
	@version_code: v6.0.0
	copyright @2012-2020
*/

class GradleApi {
	//Ready : /!\ DO NOT CHANGE, ONLY IF YOU ARE AN EXPERT.
	//=========================
	constructor(){
		//console.log('API START');
	}

	start(){
		//ok
		window["game"] = new BlockPuzzle.App();
		setTimeout(function(){gradle.hideSplash()}, 1200);
	}
	
	hasRewardedAd(){
		return true;
	}
	
	moreGamesLink(){
		
	}
	
	processBackbutton(){ //return null;
		var key=null;
		/*if(gradle_settings == true){
		    game.state.start('Menu');
		    gradle_settings = false;
		    key = 'settings';
		}
		else if(typeof game.state.getCurrentState().key!='undefined'){
			key = game.state.getCurrentState().key;
			switch(key){
				case 'Menu':
					key=null;
					break;
				case 'Game':
					//game.state.start('Menu');
					main.game.self.pauseBtnClicked();
					break;
			}
		}*/
		return key;
	}
	
	event(ev, msg){
		if(gradle.first_start && ev=='game_loaded'){setTimeout(function(){gradle.hideSplash()}, 800);return !1;}
		/*switch(ev){
			case 'main_menu':
				//document.body.style.backgroundImage = "url('images/bg_menu.jpg')";
				break;
			case 'list_picture':
				//document.body.style.backgroundImage = "url('images/bg_select.jpg')";
				break;
			case 'draw_image':
				//document.body.style.backgroundImage = "url('images/bg_game.jpg')";
				break;
		}*/
	}
	
	onVisibilityNo(){
		gradle.log('visibility no');
		gradle_onPauseRequested();
	}
	
	onVisibilityYes(){
		gradle.log('visibility yes');
		gradle_onResumeRequested();
	}	
}




