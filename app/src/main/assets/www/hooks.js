class GradleHooks extends GradleManager{ print(val){ console.log(val); }
/**
GRADLE - KNOWLEDGE IS POWER
***** PROPRIETARY CODE *****
@author : gradle (gradlecode@outlook.com)
@update: 04/08/2019 01:42:00
@version_name: gradle-logic
@version_code: v6.4.0
copyright @2012-2020
*/
	properties(){
		//Ads information
		//===============
		this.banner             = 'ca-app-pub-3940256099942544/6300978111';      //id placement banner
		this.interstitial       = 'ca-app-pub-3940256099942544/1033173712';      //id placement interstitial
		
		this.isTesting          = true; 		//Ads mode testing. set to false for a production mode.
		this.enableBanner       = true; 		//Ads enable the banner. set to false to disable the banner.
		this.enableInterstitial = true; 		//Ads enable the interstitial. set to false to disable all interstitials.
		
		this.bannerAtBottom     = true; 		//if false the banner will be at top
		this.overlap            = false;
		
		this.notifiBackbutton   = true; 		//for confirmation backbutton
		this.notifiMessage      = 'Do you want to exit the game ?';
		
		this.intervalAds        = 1;     		//Ads each interval for example each n times	

		this.bg_color 			= "black";
		this.hasRewardedAd      = true;
		
	}

	//Events manager :
	//================
    do_event(ev, msg){switch(ev){
		
		case 'first_start':   //First start
                //gradle.showInter();
                break;
			case 'SCREEN_LEVEL':
                //gradle.showInter();
                break;
			case 'EVENT_TOTALSCORE':
                gradle.showInter();
                break;

			case 'SCREEN_SETTINGS':
                //gradle.checkInterval() && gradle.showInter(); // <-- we check the interval if ok we show interstitial
                break;
			case 'SCREEN_OTHER':
                //gradle.showInter();
                break;
			case 'SCREEN_CREDITS':
                //gradle.showInter();
                break;
			case 'test':
				//gradle.checkInterval() && gradle.showInter();
                break;	
			
    }}

}

gradle = new GradleHooks();
gradle.run();


