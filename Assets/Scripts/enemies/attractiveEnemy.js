#pragma strict

var shootInterval : float = 0.8;
var fireballSpeed : float = 1;
var fireballTimer : float = 1;
var fireball : GameObject;
var target1 : Transform;
var target2 : Transform;
var shootPoint : Transform;
var animatorAttactor:Animator;

function Start () 
{
    animatorAttactor = GetComponent(Animator);
}

function Update () 
{

}

function Attack () 
{
    var direction : Vector2;
    var fireballClone : GameObject;
    if (GameObject.Find("CharacterChanger").GetComponent(CharacterChange).active == 1) 
	{
        GameObject.Find("player1").GetComponent(Rigidbody2D).gravityScale = -5;
        GameObject.Find("player1").GetComponent(characterController).grounded = false;
        fireballTimer += Time.deltaTime;
        if (fireballTimer >= shootInterval) 
		{  
            animatorAttactor.SetTrigger("catch");
            direction = target1.transform.position - transform.position;     
            fireballClone = Instantiate(fireball, shootPoint.transform.position, shootPoint.rotation);
            fireballClone.GetComponent(Rigidbody2D).velocity = direction * fireballSpeed;
            fireballTimer = 0;
        }
    }
    else 
	{
        GameObject.Find("player2").GetComponent(Rigidbody2D).gravityScale = -5;
        GameObject.Find("player2").GetComponent(characterController).grounded = false;
        fireballTimer += Time.deltaTime;
        if (fireballTimer >= shootInterval) 
		{
            animatorAttactor.SetTrigger("catch");
            direction = target2.transform.position - transform.position;
            fireballClone = Instantiate(fireball, shootPoint.transform.position, shootPoint.rotation);
            fireballClone.GetComponent(Rigidbody2D).velocity = direction * fireballSpeed;
            fireballTimer = 0;
        }
    }
}