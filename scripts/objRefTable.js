const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Behaviors.Tween,
		C3.Behaviors.scrollto,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
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
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Behaviors.EightDir.Acts.SetVectorX,
		C3.Plugins.Touch.Exps.SpeedAt,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Behaviors.DragnDrop.Acts.SetEnabled
	];
};
self.C3_JsPropNameTable = [
	{ControlTáctil: 0},
	{Audio: 0},
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
	{topBar: 0},
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
	{T_Sink: 0},
	{T_Prop_Menu_: 0},
	{Licuadora: 0},
	{T_Table_Square: 0},
	{Bandeja: 0},
	{Bandeja2: 0},
	{Clothes: 0},
	{Buttons: 0},
	{Backgrounds: 0},
	{UniqueElements: 0},
	{InvisibleElements: 0},
	{TimerElements: 0},
	{Background: 0},
	{MusicOn: 0},
	{initialTouchPosition: 0},
	{finalTouchPosition: 0},
	{isDragging: 0}
];

self.InstanceType = {
	ControlTáctil: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
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
	T_Sink: class extends self.ISpriteInstance {},
	T_Prop_Menu_: class extends self.ISpriteInstance {},
	Licuadora: class extends self.ISpriteInstance {},
	T_Table_Square: class extends self.ISpriteInstance {},
	Bandeja: class extends self.ISpriteInstance {},
	Bandeja2: class extends self.ISpriteInstance {},
	Clothes: class extends self.ISpriteInstance {},
	Buttons: class extends self.ISpriteInstance {},
	Backgrounds: class extends self.ISpriteInstance {},
	UniqueElements: class extends self.ISpriteInstance {},
	InvisibleElements: class extends self.ISpriteInstance {},
	TimerElements: class extends self.ISpriteInstance {}
}