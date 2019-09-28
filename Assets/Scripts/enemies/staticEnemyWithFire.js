#pragma strict

var shootInterval : float = 0.8;
var fireballSpeed : float = 1;
var fireballTimer : float = 1;
var fireball : GameObject;
var target1 : Transform;
var target2 : Transform;
var shootPoint : Transform;
var HP : float = 100;
var isFrozen = false;
var freezeTimer : float = 0;
var freezeTimeInterval : float = 2;
var animatorTurret : Animator;

function Start () 
{
    animatorTurret = GetComponent(Animator);
}

function Update () 
{
    if (GameObject.Find("pause").GetComponent(pause).menu == false) 
	{
        if (HP <= 0)
		{
            var scoreCounter = GameObject.Find("score_hp_keys_UI");
            scoreCounter.GetComponent(score_HP_keys_UI_script).score += 50;
            Destroy(gameObject);
        }
		
        if (isFrozen)
		{
            freezeTimer += Time.deltaTime;
            if (freezeTimer >= freezeTimeInterval)
			{
                isFrozen = false;
                freezeTimer = 0;
            }
        }
    }
}

function Attack () 
{
    var direction : Vector2;
    var fireballClone : GameObject;
	
    if (GameObject.Find("CharacterChanger").GetComponent(CharacterChange).active == 1) 
	{
        fireballTimer += Time.deltaTime;
        if (fireballTimer >= shootInterval) 
		{  
            animatorTurret.SetTrigger("shoot");
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
            animatorTurret.SetTrigger("shoot");
            direction = target2.transform.position - transform.position;
            fireballClone = Instantiate(fireball, shootPoint.transform.position, shootPoint.rotation);
            fireballClone.GetComponent(Rigidbody2D).velocity = direction * fireballSpeed;
            fireballTimer = 0;
        }
    }
}