#pragma strict

var grounded1 = false;
var grounded2 = false;
var move1;
var move2;
var currentPlayer : GameObject;
var previousPlayer : GameObject;
var active = 1;
var isBossDead = false;

function Start ()
{
    currentPlayer = GameObject.Find("player1");
    previousPlayer = GameObject.Find("player2");
    previousPlayer.SetActive(false);  
}

function Update ()
{   
    if (GameObject.Find("pause").GetComponent(pause).menu == false) 
        if (GameObject.Find("player1") != null || GameObject.Find("player2") != null) 
		{
        	grounded1 = currentPlayer.GetComponent(characterController).grounded;
    		grounded2 = previousPlayer.GetComponent(characterController).grounded;
    		move1 = currentPlayer.GetComponent(characterController).move;
    		move2 = previousPlayer.GetComponent(characterController).move;
			
    		if(Input.GetKeyDown(KeyCode.Space))
			{
                if(!isBossDead)
            	    if(grounded1 == true && grounded2 == true && move1 == 0 && move2 == 0)
					{
                	    active *= -1;
                	    var currentPosition = currentPlayer.GetComponent(Transform).position;
                	    currentPlayer.SetActive(false); 
                	    previousPlayer.SetActive(true);
                	    previousPlayer.GetComponent(Transform).position=currentPosition;
                	    swap();
            	    }
        	}
			
    		if (isBossDead)
			{
    		    previousPlayer.GetComponent(Transform).position = currentPlayer.GetComponent(Transform).position;
    		    previousPlayer.GetComponent(Transform).position += Vector3(10, 0, 0);
        	    currentPlayer.SetActive(true);
        	    previousPlayer.SetActive(true);
        	}
        }
}

function swap ()
{
    var temp = previousPlayer;
    previousPlayer = currentPlayer;
    currentPlayer = temp;
}