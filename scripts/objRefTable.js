const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.LocalStorage,
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Behaviors.Tween,
		C3.Behaviors.scrollto,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.Pin,
		C3.Plugins.Text,
		C3.Plugins.video,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.IsOnLayer,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Fade.Acts.SetFadeInTime,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.Audio.Acts.SetMuted,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Text.Exps.Width,
		C3.Plugins.Text.Exps.Height,
		C3.Plugins.video.Acts.SetLooping,
		C3.Plugins.video.Acts.SetSource2,
		C3.Plugins.video.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.video.Acts.Destroy,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Behaviors.EightDir.Acts.SetVectorX,
		C3.Plugins.Touch.Exps.SpeedAt,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Acts.CreateObjectByName,
		C3.Behaviors.DragnDrop.Cnds.IsDragging,
		C3.Plugins.Sprite.Acts.SetEffectEnabled,
		C3.Behaviors.Pin.Acts.Unpin,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Behaviors.Pin.Cnds.IsPinned,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetZElevation,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Exps.ItemValue
	];
};
self.C3_JsPropNameTable = [
	{ControlTáctil: 0},
	{Audio: 0},
	{AlmacenamientoLocalBestScore: 0},
	{Body: 0},
	{Girl: 0},
	{xChica: 0},
	{yChica: 0},
	{xRopero: 0},
	{yRopero: 0},
	{isOn: 0},
	{Jean: 0},
	{Armario: 0},
	{Percha: 0},
	{Barra: 0},
	{Remera: 0},
	{VestidoRosa: 0},
	{VestidoAzul: 0},
	{Calza: 0},
	{PantalonVioleta: 0},
	{PolleraAzul: 0},
	{PolleraRosa: 0},
	{Short: 0},
	{PoleraAmariila: 0},
	{CosoNegro: 0},
	{Musculosa: 0},
	{Campera: 0},
	{MusculosaAzul: 0},
	{MusculosaRoja: 0},
	{ZapatillasNegras: 0},
	{ZapatillasRojas: 0},
	{ZapatillasLisas: 0},
	{Zapatos: 0},
	{Sombrero: 0},
	{Collar: 0},
	{LentesSol: 0},
	{Lentes: 0},
	{Bosque: 0},
	{Bosque2: 0},
	{PinkBackground: 0},
	{canUse: 0},
	{LeftButton: 0},
	{RightButton: 0},
	{Cinnamoroll: 0},
	{Cinnamoroll2: 0},
	{EyeButton: 0},
	{Cinnamoroll3: 0},
	{Cinnamoroll4: 0},
	{Pirulo: 0},
	{Pirulo2: 0},
	{loki: 0},
	{loki2: 0},
	{loki3: 0},
	{loki4: 0},
	{CleanButton: 0},
	{totoro: 0},
	{SplashArt: 0},
	{PlayButton: 0},
	{MusicButton: 0},
	{Desvanecer: 0},
	{FadeIn: 0},
	{FadeOut: 0},
	{HomeButton: 0},
	{LoadingBar: 0},
	{LoadingBottomBar: 0},
	{LoadingTopBar: 0},
	{PerchaButton: 0},
	{Button: 0},
	{Button2: 0},
	{Capa: 0},
	{VoteLoki: 0},
	{CascoLoki: 0},
	{Mano: 0},
	{Pastillas: 0},
	{totoro2: 0},
	{totoro3: 0},
	{Alas: 0},
	{Lana: 0},
	{Lana3: 0},
	{Lana2: 0},
	{Mano2: 0},
	{Mochila: 0},
	{Cartera: 0},
	{T_Workbench: 0},
	{T_Tile_Ground_: 0},
	{T_Tile_Ground_2: 0},
	{CafeFloor: 0},
	{Sprite: 0},
	{T_Prop_Coffee_Machine: 0},
	{T_Blue_Wall_Middle: 0},
	{T_Blue_Wall_Top: 0},
	{T_Shelf: 0},
	{T_Shelf_Mugs: 0},
	{T_Prop_Plate_: 0},
	{xOriginal: 0},
	{yOriginal: 0},
	{xScaleOriginal: 0},
	{yScaleOriginal: 0},
	{type: 0},
	{name: 0},
	{overlaps: 0},
	{show: 0},
	{drink: 0},
	{food: 0},
	{T_Prop_Plate_Small: 0},
	{T_Desert_Cheesecake_Stand: 0},
	{T_Desert_DesertBox: 0},
	{T_Desert_Chocolate_Balls_: 0},
	{completed: 0},
	{using: 0},
	{duration: 0},
	{elapsedTime: 0},
	{Tweeninterpolación: 0},
	{T_Prop_Cattle_: 0},
	{value: 0},
	{T_Prop_Marmelade_Purple: 0},
	{T_Prop_Marmelade_Red: 0},
	{T_Prop_Marmelade_Yellow: 0},
	{T_Prop_Marmelade_Orange: 0},
	{T_Prop_Coffee_Beans_: 0},
	{T_Prop_Coffee_Beans_2: 0},
	{T_Plant_: 0},
	{T_Desert_Chocolate_Ball_: 0},
	{T_Desert_Croissant: 0},
	{T_Desert_Cheesecake_Slice: 0},
	{T_Desert_Cookie_: 0},
	{T_Desert_Cookie_2: 0},
	{T_Drink_Coffee_Empty_Cup: 0},
	{T_Desert_Muffin: 0},
	{T_Desert_Donut_: 0},
	{T_Desert_Donut_2: 0},
	{DesplazarHasta: 0},
	{ArrastrarYSoltar: 0},
	{"8Direcciones": 0},
	{RestringidoALaEscena: 0},
	{Camera: 0},
	{TeaTopBar: 0},
	{Horno: 0},
	{UITable: 0},
	{Lavamanos: 0},
	{T_Prop_Menu_: 0},
	{actualValue: 0},
	{numberOfJuices: 0},
	{Licuadora: 0},
	{T_Table_Square: 0},
	{dish: 0},
	{snack: 0},
	{drinkPedido: 0},
	{foodPedido: 0},
	{snackPedido: 0},
	{Pegado: 0},
	{Bandeja2: 0},
	{Bandeja3: 0},
	{LeftCoffee: 0},
	{RightCoffee: 0},
	{LeftCoffeTopBar: 0},
	{T_Prop_Plate_Small2: 0},
	{RightCoffeTopBar: 0},
	{TachoDeBasura: 0},
	{TachoDeBasuraSinTapa: 0},
	{DonaBlanca: 0},
	{GalletitaRoja: 0},
	{T_Window_Cloudy: 0},
	{T_Lamp_On: 0},
	{T_Plant_2: 0},
	{T_Prop_Sponge_: 0},
	{caja: 0},
	{caja2: 0},
	{HornoTopBar: 0},
	{TapaHorno: 0},
	{filled: 0},
	{VasoDeVidrio: 0},
	{Vasos: 0},
	{LicuadoraTopBar: 0},
	{LicuadoraBase: 0},
	{VasoDeVidrio2: 0},
	{Platos: 0},
	{LavamanosTopBar: 0},
	{PlatoSucio: 0},
	{TazaSucia: 0},
	{VasoDeVidrioSucio: 0},
	{Pedido: 0},
	{dificulty: 0},
	{position: 0},
	{cost: 0},
	{propina: 0},
	{Pedido2: 0},
	{Bebida: 0},
	{Comida: 0},
	{Snack: 0},
	{Pedido1TopBar: 0},
	{HornoBottomBar: 0},
	{LeftCoffeBottomBar: 0},
	{RightCoffeBottomBar: 0},
	{TeaBottomBar: 0},
	{LicuadoraBottomBar: 0},
	{LavamanosBottomBar: 0},
	{Pedido1BottomBar: 0},
	{Cruz1: 0},
	{Cruz2: 0},
	{Cruz3: 0},
	{moneyText: 0},
	{Pedido2TopBar: 0},
	{Pedido2BottomBar: 0},
	{Pedido3TopBar: 0},
	{Pedido3BottomBar: 0},
	{T_Plant_3: 0},
	{TutorialBackground: 0},
	{Video1: 0},
	{Video2: 0},
	{Tutorial1Texto: 0},
	{TextoVideo1: 0},
	{TextoVideo2: 0},
	{Video3: 0},
	{Video4: 0},
	{TextoVideo3: 0},
	{TextoVideo4: 0},
	{ContinueButton1: 0},
	{Tutorial1Texto2: 0},
	{Video6: 0},
	{TextoVideo6: 0},
	{Video5: 0},
	{TextoVideo5: 0},
	{AlphaBackground: 0},
	{EndGame1Texto: 0},
	{EndGame1Texto2: 0},
	{EndGame1Texto3: 0},
	{EndGame1Texto4: 0},
	{EndGame1Texto5: 0},
	{EndGame1Texto6: 0},
	{EndGame1Texto7: 0},
	{EndGame1Texto8: 0},
	{EndGame1Texto9: 0},
	{ContinueButton2: 0},
	{MemoryTopBar: 0},
	{MemoryBottomBar: 0},
	{Memory: 0},
	{Memory2: 0},
	{Memory3: 0},
	{Memory4: 0},
	{Memory5: 0},
	{EndGame1Texto10: 0},
	{EndGame1Texto11: 0},
	{BackgroundMemory: 0},
	{MemoryPhoto: 0},
	{BackgroundMemories: 0},
	{MemoryText: 0},
	{Spritesheet6: 0},
	{Spritesheet1: 0},
	{Spritesheet2: 0},
	{SpriteSheet3: 0},
	{SpriteSheet4: 0},
	{SpriteSheet5: 0},
	{Clothes: 0},
	{Buttons: 0},
	{Backgrounds: 0},
	{UniqueElements: 0},
	{InvisibleElements: 0},
	{Drinks: 0},
	{Juice: 0},
	{Background: 0},
	{MusicOn: 0},
	{initialTouchPosition: 0},
	{finalTouchPosition: 0},
	{isDragging: 0},
	{plates: 0},
	{glass: 0},
	{cups: 0},
	{dishesToClean: 0},
	{dishesCleaned: 0},
	{dirtyDishes: 0},
	{tutorialCont: 0},
	{paused: 0},
	{gameOver: 0},
	{memory: 0},
	{bestScore: 0},
	{totalScore: 0},
	{cupsName: 0},
	{xCups: 0},
	{yCups: 0},
	{glassName: 0},
	{xGlass: 0},
	{yGlass: 0},
	{platesName: 0},
	{xPlates: 0},
	{yPlates: 0},
	{position1: 0},
	{position2: 0},
	{position3: 0},
	{position1Used: 0},
	{position1Used2: 0},
	{position1Used3: 0},
	{timeToDelivery: 0},
	{lifes: 0},
	{totalMoney: 0}
];

self.InstanceType = {
	ControlTáctil: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	AlmacenamientoLocalBestScore: class extends self.IInstance {},
	Girl: class extends self.ISpriteInstance {},
	Jean: class extends self.ISpriteInstance {},
	Armario: class extends self.ISpriteInstance {},
	Percha: class extends self.ISpriteInstance {},
	Barra: class extends self.ISpriteInstance {},
	Remera: class extends self.ISpriteInstance {},
	VestidoRosa: class extends self.ISpriteInstance {},
	VestidoAzul: class extends self.ISpriteInstance {},
	Calza: class extends self.ISpriteInstance {},
	PantalonVioleta: class extends self.ISpriteInstance {},
	PolleraAzul: class extends self.ISpriteInstance {},
	PolleraRosa: class extends self.ISpriteInstance {},
	Short: class extends self.ISpriteInstance {},
	PoleraAmariila: class extends self.ISpriteInstance {},
	CosoNegro: class extends self.ISpriteInstance {},
	Musculosa: class extends self.ISpriteInstance {},
	Campera: class extends self.ISpriteInstance {},
	MusculosaAzul: class extends self.ISpriteInstance {},
	MusculosaRoja: class extends self.ISpriteInstance {},
	ZapatillasNegras: class extends self.ISpriteInstance {},
	ZapatillasRojas: class extends self.ISpriteInstance {},
	ZapatillasLisas: class extends self.ISpriteInstance {},
	Zapatos: class extends self.ISpriteInstance {},
	Sombrero: class extends self.ISpriteInstance {},
	Collar: class extends self.ISpriteInstance {},
	LentesSol: class extends self.ISpriteInstance {},
	Lentes: class extends self.ISpriteInstance {},
	Bosque: class extends self.ISpriteInstance {},
	Bosque2: class extends self.ISpriteInstance {},
	PinkBackground: class extends self.ISpriteInstance {},
	LeftButton: class extends self.ISpriteInstance {},
	RightButton: class extends self.ISpriteInstance {},
	Cinnamoroll: class extends self.ISpriteInstance {},
	Cinnamoroll2: class extends self.ISpriteInstance {},
	EyeButton: class extends self.ISpriteInstance {},
	Cinnamoroll3: class extends self.ISpriteInstance {},
	Cinnamoroll4: class extends self.ISpriteInstance {},
	Pirulo: class extends self.ISpriteInstance {},
	Pirulo2: class extends self.ISpriteInstance {},
	loki: class extends self.ISpriteInstance {},
	loki2: class extends self.ISpriteInstance {},
	loki3: class extends self.ISpriteInstance {},
	loki4: class extends self.ISpriteInstance {},
	CleanButton: class extends self.ISpriteInstance {},
	totoro: class extends self.ISpriteInstance {},
	SplashArt: class extends self.ISpriteInstance {},
	PlayButton: class extends self.ISpriteInstance {},
	MusicButton: class extends self.ISpriteInstance {},
	FadeIn: class extends self.ISpriteInstance {},
	FadeOut: class extends self.ISpriteInstance {},
	HomeButton: class extends self.ISpriteInstance {},
	LoadingBar: class extends self.ISpriteInstance {},
	LoadingBottomBar: class extends self.ISpriteInstance {},
	LoadingTopBar: class extends self.ISpriteInstance {},
	PerchaButton: class extends self.ISpriteInstance {},
	Button: class extends self.ISpriteInstance {},
	Button2: class extends self.ISpriteInstance {},
	Capa: class extends self.ISpriteInstance {},
	VoteLoki: class extends self.ISpriteInstance {},
	CascoLoki: class extends self.ISpriteInstance {},
	Mano: class extends self.ISpriteInstance {},
	Pastillas: class extends self.ISpriteInstance {},
	totoro2: class extends self.ISpriteInstance {},
	totoro3: class extends self.ISpriteInstance {},
	Alas: class extends self.ISpriteInstance {},
	Lana: class extends self.ISpriteInstance {},
	Lana3: class extends self.ISpriteInstance {},
	Lana2: class extends self.ISpriteInstance {},
	Mano2: class extends self.ISpriteInstance {},
	Mochila: class extends self.ISpriteInstance {},
	Cartera: class extends self.ISpriteInstance {},
	T_Workbench: class extends self.ISpriteInstance {},
	T_Tile_Ground_: class extends self.ISpriteInstance {},
	T_Tile_Ground_2: class extends self.ISpriteInstance {},
	CafeFloor: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	T_Prop_Coffee_Machine: class extends self.ISpriteInstance {},
	T_Blue_Wall_Middle: class extends self.ISpriteInstance {},
	T_Blue_Wall_Top: class extends self.ISpriteInstance {},
	T_Shelf: class extends self.ISpriteInstance {},
	T_Shelf_Mugs: class extends self.ISpriteInstance {},
	T_Prop_Plate_: class extends self.ISpriteInstance {},
	T_Prop_Plate_Small: class extends self.ISpriteInstance {},
	T_Desert_Cheesecake_Stand: class extends self.ISpriteInstance {},
	T_Desert_DesertBox: class extends self.ISpriteInstance {},
	T_Desert_Chocolate_Balls_: class extends self.ISpriteInstance {},
	T_Prop_Cattle_: class extends self.ISpriteInstance {},
	T_Prop_Marmelade_Purple: class extends self.ISpriteInstance {},
	T_Prop_Marmelade_Red: class extends self.ISpriteInstance {},
	T_Prop_Marmelade_Yellow: class extends self.ISpriteInstance {},
	T_Prop_Marmelade_Orange: class extends self.ISpriteInstance {},
	T_Prop_Coffee_Beans_: class extends self.ISpriteInstance {},
	T_Prop_Coffee_Beans_2: class extends self.ISpriteInstance {},
	T_Plant_: class extends self.ISpriteInstance {},
	T_Desert_Chocolate_Ball_: class extends self.ISpriteInstance {},
	T_Desert_Croissant: class extends self.ISpriteInstance {},
	T_Desert_Cheesecake_Slice: class extends self.ISpriteInstance {},
	T_Desert_Cookie_: class extends self.ISpriteInstance {},
	T_Desert_Cookie_2: class extends self.ISpriteInstance {},
	T_Drink_Coffee_Empty_Cup: class extends self.ISpriteInstance {},
	T_Desert_Muffin: class extends self.ISpriteInstance {},
	T_Desert_Donut_: class extends self.ISpriteInstance {},
	T_Desert_Donut_2: class extends self.ISpriteInstance {},
	Camera: class extends self.ISpriteInstance {},
	TeaTopBar: class extends self.ISpriteInstance {},
	Horno: class extends self.ISpriteInstance {},
	UITable: class extends self.ISpriteInstance {},
	Lavamanos: class extends self.ISpriteInstance {},
	T_Prop_Menu_: class extends self.ISpriteInstance {},
	Licuadora: class extends self.ISpriteInstance {},
	T_Table_Square: class extends self.ISpriteInstance {},
	Bandeja2: class extends self.ISpriteInstance {},
	Bandeja3: class extends self.ISpriteInstance {},
	LeftCoffee: class extends self.ISpriteInstance {},
	RightCoffee: class extends self.ISpriteInstance {},
	LeftCoffeTopBar: class extends self.ISpriteInstance {},
	T_Prop_Plate_Small2: class extends self.ISpriteInstance {},
	RightCoffeTopBar: class extends self.ISpriteInstance {},
	TachoDeBasura: class extends self.ISpriteInstance {},
	TachoDeBasuraSinTapa: class extends self.ISpriteInstance {},
	DonaBlanca: class extends self.ISpriteInstance {},
	GalletitaRoja: class extends self.ISpriteInstance {},
	T_Window_Cloudy: class extends self.ISpriteInstance {},
	T_Lamp_On: class extends self.ISpriteInstance {},
	T_Plant_2: class extends self.ISpriteInstance {},
	T_Prop_Sponge_: class extends self.ISpriteInstance {},
	caja: class extends self.ISpriteInstance {},
	caja2: class extends self.ISpriteInstance {},
	HornoTopBar: class extends self.ISpriteInstance {},
	TapaHorno: class extends self.ISpriteInstance {},
	VasoDeVidrio: class extends self.ISpriteInstance {},
	Vasos: class extends self.ISpriteInstance {},
	LicuadoraTopBar: class extends self.ISpriteInstance {},
	LicuadoraBase: class extends self.ISpriteInstance {},
	VasoDeVidrio2: class extends self.ISpriteInstance {},
	Platos: class extends self.ISpriteInstance {},
	LavamanosTopBar: class extends self.ISpriteInstance {},
	PlatoSucio: class extends self.ISpriteInstance {},
	TazaSucia: class extends self.ISpriteInstance {},
	VasoDeVidrioSucio: class extends self.ISpriteInstance {},
	Pedido: class extends self.ISpriteInstance {},
	Pedido2: class extends self.ISpriteInstance {},
	Bebida: class extends self.ISpriteInstance {},
	Comida: class extends self.ISpriteInstance {},
	Snack: class extends self.ISpriteInstance {},
	Pedido1TopBar: class extends self.ISpriteInstance {},
	HornoBottomBar: class extends self.ISpriteInstance {},
	LeftCoffeBottomBar: class extends self.ISpriteInstance {},
	RightCoffeBottomBar: class extends self.ISpriteInstance {},
	TeaBottomBar: class extends self.ISpriteInstance {},
	LicuadoraBottomBar: class extends self.ISpriteInstance {},
	LavamanosBottomBar: class extends self.ISpriteInstance {},
	Pedido1BottomBar: class extends self.ISpriteInstance {},
	Cruz1: class extends self.ISpriteInstance {},
	Cruz2: class extends self.ISpriteInstance {},
	Cruz3: class extends self.ISpriteInstance {},
	moneyText: class extends self.ITextInstance {},
	Pedido2TopBar: class extends self.ISpriteInstance {},
	Pedido2BottomBar: class extends self.ISpriteInstance {},
	Pedido3TopBar: class extends self.ISpriteInstance {},
	Pedido3BottomBar: class extends self.ISpriteInstance {},
	T_Plant_3: class extends self.ISpriteInstance {},
	TutorialBackground: class extends self.ISpriteInstance {},
	Video1: class extends self.IWorldInstance {},
	Video2: class extends self.IWorldInstance {},
	Tutorial1Texto: class extends self.ITextInstance {},
	TextoVideo1: class extends self.ITextInstance {},
	TextoVideo2: class extends self.ITextInstance {},
	Video3: class extends self.IWorldInstance {},
	Video4: class extends self.IWorldInstance {},
	TextoVideo3: class extends self.ITextInstance {},
	TextoVideo4: class extends self.ITextInstance {},
	ContinueButton1: class extends self.ITextInstance {},
	Tutorial1Texto2: class extends self.ITextInstance {},
	Video6: class extends self.IWorldInstance {},
	TextoVideo6: class extends self.ITextInstance {},
	Video5: class extends self.IWorldInstance {},
	TextoVideo5: class extends self.ITextInstance {},
	AlphaBackground: class extends self.ISpriteInstance {},
	EndGame1Texto: class extends self.ITextInstance {},
	EndGame1Texto2: class extends self.ITextInstance {},
	EndGame1Texto3: class extends self.ITextInstance {},
	EndGame1Texto4: class extends self.ITextInstance {},
	EndGame1Texto5: class extends self.ITextInstance {},
	EndGame1Texto6: class extends self.ITextInstance {},
	EndGame1Texto7: class extends self.ITextInstance {},
	EndGame1Texto8: class extends self.ITextInstance {},
	EndGame1Texto9: class extends self.ITextInstance {},
	ContinueButton2: class extends self.ITextInstance {},
	MemoryTopBar: class extends self.ISpriteInstance {},
	MemoryBottomBar: class extends self.ISpriteInstance {},
	Memory: class extends self.ISpriteInstance {},
	Memory2: class extends self.ISpriteInstance {},
	Memory3: class extends self.ISpriteInstance {},
	Memory4: class extends self.ISpriteInstance {},
	Memory5: class extends self.ISpriteInstance {},
	EndGame1Texto10: class extends self.ITextInstance {},
	EndGame1Texto11: class extends self.ITextInstance {},
	BackgroundMemory: class extends self.ISpriteInstance {},
	MemoryPhoto: class extends self.ISpriteInstance {},
	BackgroundMemories: class extends self.ISpriteInstance {},
	MemoryText: class extends self.ITextInstance {},
	Spritesheet6: class extends self.ISpriteInstance {},
	Spritesheet1: class extends self.ISpriteInstance {},
	Spritesheet2: class extends self.ISpriteInstance {},
	SpriteSheet3: class extends self.ISpriteInstance {},
	SpriteSheet4: class extends self.ISpriteInstance {},
	SpriteSheet5: class extends self.ISpriteInstance {},
	Clothes: class extends self.ISpriteInstance {},
	Buttons: class extends self.ISpriteInstance {},
	Backgrounds: class extends self.ISpriteInstance {},
	UniqueElements: class extends self.ISpriteInstance {},
	InvisibleElements: class extends self.ISpriteInstance {},
	Drinks: class extends self.ISpriteInstance {},
	Juice: class extends self.ISpriteInstance {}
}