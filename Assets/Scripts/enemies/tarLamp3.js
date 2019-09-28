#pragma strict

function Start () 
{

}

function Update () 
{
	 if (GameObject.Find("pause").GetComponent(pause).menu == false)
		if (Input.GetKeyDown(KeyCode.H) && GameObject.Find("player1").GetComponent(characterController).lamp == 3)
			GameObject.Find("lamp3").GetComponent(Rigidbody2D).gravityScale = 1;
}