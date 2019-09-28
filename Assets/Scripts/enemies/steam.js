#pragma strict

var shootInterval : float = 0.8;
var fireballSpeed : float = 1;
var fireballTimer : float = 1;
var fireball : GameObject;
var target1 : Transform;
var target2 : Transform;
var shootPoint : Transform;

function Update () 
{

}

function Attack () 
{
    var direction : Vector2;
    var fireballClone : GameObject;
	
    if (GameObject.Find("CharacterChanger").GetComponent(CharacterChange).active == 1) 
	{
        fireballTimer += Time.deltaTime;
        if (fireballTimer >= shootInterval) {  
            direction = target1.transform.position - transform.position;      
            fireballClone = Instantiate(fireball, shootPoint.transform.position, shootPoint.rotation);
            fireballClone.GetComponent(Rigidbody2D).velocity = direction * fireballSpeed;
            fireballTimer = 0;
        }
    }
    else 
	{
        fireballTimer += Time.deltaTime;
        if (fireballTimer >= shootInterval) 
		{
            direction = target2.transform.position - transform.position;
            fireballClone = Instantiate(fireball, shootPoint.transform.position, shootPoint.rotation);
            fireballClone.GetComponent(Rigidbody2D).velocity = direction * fireballSpeed;
            fireballTimer = 0;
        }
    }
}