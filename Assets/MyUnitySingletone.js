#pragma strict

private static var instance : MyUnitySingletone;

public static function GetInstance() : MyUnitySingletone 
{
    return instance;
}

function Awake () 
{
	if (instance != null && instance != this) 
	{
		Destroy(this.gameObject);
		return;
	} 
	else 
		instance = this;
	
	DontDestroyOnLoad(this.gameObject);
}
