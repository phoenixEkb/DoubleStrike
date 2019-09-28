#pragma strict

var shootInterval : float = 0.8;
var fireballSpeed : float = 1;
var fireballTimer : float = 1;
var fireball : GameObject;
var target1 : Transform;
var target2 : Transform;
var shootPoint : Transform;
var direc : float;
var speed : float = 5f;
var HP : float = 100;
var isFrozen = false;
var freezeTimer : float = 0;
var freezeTimeInterval : float = 2;
var animatorEnemy : Animator;

function Start () 
{
    direc = transform.localScale.x;
    animatorEnemy = GetComponent(Animator);
    
}

function Update () 
{
    if (GameObject.Find("pause").GetComponent(pause).menu == false) 
	{
        if (!isFrozen)
		{
            GetComponent(Rigidbody2D).velocity = new Vector2(-speed, GetComponent(Rigidbody2D).velocity.y);
            transform.localScale = new Vector3 (direc, transform.localScale.y, transform.localScale.z);
            animatorEnemy.SetTrigger("walk");
        } 
		else 
		{
            animatorEnemy.SetTrigger("idle");
            freezeTimer += Time.deltaTime;
            if (freezeTimer >= freezeTimeInterval)
			{
                isFrozen = false;
                freezeTimer = 0;
            }
        }
		
        if (HP <= 0)
		{
            var scoreCounter = GameObject.Find("score_hp_keys_UI");
            scoreCounter.GetComponent(score_HP_keys_UI_script).score += 50;
            Destroy(gameObject);
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
            direction = target1.transform.position - transform.position;
            animatorEnemy.SetTrigger("fire");    
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
            animatorEnemy.SetTrigger("fire");
            fireballClone = Instantiate(fireball, shootPoint.transform.position, shootPoint.rotation);
            fireballClone.GetComponent(Rigidbody2D).velocity = direction * fireballSpeed;
            fireballTimer = 0;
        }
    }
}

function OnTriggerEnter2D (col : Collider2D) 
{
    if (col.isTrigger == true) 
        if (col.gameObject.tag == "Box") 
		{
            direc *= -1f;
            speed *= -1f;
       }
}

function OnCollisionEnter2D (col : Collision2D) 
{
    if (col.gameObject.name == "punchObject(Clone)")
        HP -= 20;
	
    if (col.gameObject.tag == "Enemy" || col.gameObject.tag == "Box") 
	{
        direc *= -1f;
        speed *= -1f;
    }
	
    if (col.gameObject.name == "bullet(Clone)")
        isFrozen = true;
}

