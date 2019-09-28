#pragma strict

function Start () 
{

}

function Update () 
{
	 if (GameObject.Find("pause").GetComponent(pause).menu == false)
		if (Input.GetKeyDown(KeyCode.H) && GameObject.Find("player1").GetComponent(characterController).lamp == 5)
			GameObject.Find("lamp5").GetComponent(Rigidbody2D).gravityScale = 1;
}