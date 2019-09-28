#pragma strict

var maxSpeed = 10;
var jumpForce = 700;
var facingRight = true;
var grounded = true;
var move = 0;
var bullet: GameObject;
var HP : float = 100;
var bulletSpeed : int = 50;
var punchSpeed : int = 1;
var direction : float;
var punchObject : GameObject;
var block = false;
var teleportRange : float = 10;
var up = 1;
var down = -1;
var levelTop : Transform;
var levelBottom : Transform;
var maxHP : float = 100;
var canTeleportUp = false;
var canTeleportDown = false;
var lamp = 0;
var animatorPlayer : Animator;

function Start () 
{
    animatorPlayer = GetComponent(Animator);
    maxHP = HP;
}
	
function FixedUpdate () 
{
    if (GameObject.Find("pause").GetComponent(pause).menu == false) 
	{    
        move = Input.GetAxisRaw ("Horizontal");
        if (HP <= 0) 
		{
            HP = 100;
            Application.LoadLevel(Application.loadedLevel);
        }
    }
    
}

function Update()
{
    if (GameObject.Find("pause").GetComponent(pause).menu == false) 
	{
        if (grounded == true && (Input.GetKeyDown(KeyCode.W) || Input.GetKeyDown(KeyCode.UpArrow))) 
		{
            GetComponent(Rigidbody2D).AddForce(Vector2(0, jumpForce));
            grounded = false;
        }

        if (Input.GetKey(KeyCode.A) || Input.GetKey (KeyCode.D))
		{
            animatorPlayer.SetTrigger("playerWalking");
            GetComponent(Rigidbody2D).velocity = Vector2(-maxSpeed, GetComponent(Rigidbody2D).velocity.y);
        }
		
        GetComponent(Rigidbody2D).velocity = Vector2 (move * maxSpeed, GetComponent(Rigidbody2D).velocity.y);
		
        if (move > 0 && !facingRight)
            Flip ();
        else if (move < 0 && facingRight)
            Flip ();
		
        if (Input.GetKeyDown(KeyCode.F)) 
		{
            if(gameObject.name == "player1")
			{
                Punch();
                animatorPlayer.SetTrigger("playerStriking");
            }
            if(gameObject.name == "player2")
			{
                Fire();
                animatorPlayer.SetTrigger("playerFire");
            }
                
        }
		
        if (Input.GetKey(KeyCode.G) && GetComponent(Rigidbody2D).gravityScale == 1)
		{
            if(gameObject.name == "player1")
                animatorPlayer.SetTrigger("playerBlock");
			block = true;		
        }
        else
		{
            if(gameObject.name == "player1" && Input.GetKey(KeyCode.G) != true)
			{
				animatorPlayer.ResetTrigger("playerBlock");
				animatorPlayer.SetTrigger("playerIdle");
				block = false;
			}
		}
		
        if (Input.GetKeyDown(KeyCode.T))
            Teleport(up);
		
        if (Input.GetKeyDown(KeyCode.Y))
            Teleport(down);
    }
}
	
function Flip () 
{
    facingRight = !facingRight;
    var theScale = transform.localScale;
    theScale.x *= -1;
    transform.localScale = theScale;
}

function Fire()
{
    var bulletStartPosition : Vector3;
	
    if (facingRight)
        bulletStartPosition = new Vector3(transform.position.x + 1, transform.position.y + 1, 0);
    else
        bulletStartPosition = new Vector3(transform.position.x - 1, transform.position.y + 1, 0);
	
    direction = (bulletStartPosition.x - transform.position.x)/Mathf.Abs( bulletStartPosition.x - transform.position.x);
    var bulletClone = Instantiate(bullet, bulletStartPosition, transform.rotation);
    bulletClone.GetComponent(Rigidbody2D).velocity = Vector2(direction * bulletSpeed, 0);
}

function Punch ()
{
    var punchStartPosition : Vector3;
	
    if (facingRight)
        punchStartPosition = new Vector3(transform.position.x + 1, transform.position.y + 0.2, 0);
    else
        punchStartPosition = new Vector3(transform.position.x - 1, transform.position.y + 0.2, 0);
	
    direction = (punchStartPosition.x - transform.position.x)/Mathf.Abs( punchStartPosition.x - transform.position.x);
    var bulletClone = Instantiate(punchObject, punchStartPosition, transform.rotation);
    bulletClone.GetComponent(Rigidbody2D).velocity = Vector2(direction * punchSpeed, 0);
}

function OnCollisionEnter2D (col : Collision2D) 
{
    if (col.gameObject.tag == "Enemy" || col.gameObject.name == "fireball(Clone)" || col.gameObject.name == "enemysPunch" || col.gameObject.name == "boss") 
	{
        if(!block)
            HP -= 20;
    }
    else
        if (col.gameObject.tag == "Platform" || col.gameObject.tag == "Box" || col.gameObject.tag == "LevelTop" || col.gameObject.tag == "LevelBottom")
            grounded = true;
			
    if (col.gameObject.tag == "healingHeart")
        HP += 0.2 * maxHP;
	
    if (col.gameObject.name == "fireball2(Clone)")
    	HP -= 2;
}

function OnTriggerEnter2D (col : Collider2D) 
{
    if (col.isTrigger == true) 
	{
        if (col.gameObject.name == "ray(Clone)")
            HP -= 10;
        if (col.gameObject.name == "tarLamp1")
			lamp = 1;
		if (col.gameObject.name == "tarLamp2")
			lamp = 2;
		if (col.gameObject.name == "tarLamp3")
			lamp = 3;
		if (col.gameObject.name == "tarLamp4")
			lamp = 4;
		if (col.gameObject.name == "tarLamp5")
			lamp = 5;
	}
}

function Teleport (d : float)
{
    if(gameObject.name == "player2" && grounded)
	{
        if(d == up && canTeleportUp)
		{
            transform.position.y += teleportRange;
            grounded = false;
        }
        else if (d == down && canTeleportDown)
		{
            transform.position.y -= teleportRange;
            grounded = false;
        }
    }
}
