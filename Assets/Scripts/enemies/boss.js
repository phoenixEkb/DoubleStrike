#pragma strict

var speed : float = 7f;
var direc : float;
var ray : GameObject;
var HP : float = 1000;
var shootPoints : Transform[] = new Transform[14];
var timer : float = 7;
var animatorBoss : Animator;

function Start () 
{
    animatorBoss = GetComponent(Animator);
    direc = transform.localScale.x;
}

function Update () 
{
    if (GameObject.Find("pause").GetComponent(pause).menu == false) 
	{
        GetComponent(Rigidbody2D).velocity = new Vector2(-speed, GetComponent(Rigidbody2D).velocity.y);
        transform.localScale = new Vector3 (direc, transform.localScale.y, transform.localScale.z);
        if (HP <= 0)
		{
            var scoreCounter = GameObject.Find("score_hp_keys_UI");
            scoreCounter.GetComponent(score_HP_keys_UI_script).score += 1000;
            var changer = GameObject.Find("CharacterChanger");
            changer.GetComponent(CharacterChange).isBossDead = true;
            Destroy(gameObject);
            Application.LoadLevel("pre-titles");
        }
        Attack();         
    }
}

function Attack () 
{
    var rayClone : GameObject;
	
	if (timer > 0) 
		timer -= Time.deltaTime;
	
	if (timer <= 0) 
	{   
		animatorBoss.SetTrigger("bossShooting");
		var ray1 = shootPoints[Random.Range(0, 13)];
		var ray2 = shootPoints[Random.Range(0, 13)];
		var ray3 = shootPoints[Random.Range(0, 13)];
		var ray4 = shootPoints[Random.Range(0, 13)];
		var ray5 = shootPoints[Random.Range(0, 13)];
		var ray6 = shootPoints[Random.Range(0, 13)];
		var ray7 = shootPoints[Random.Range(0, 13)];
		var ray8 = shootPoints[Random.Range(0, 13)];
		var ray9 = shootPoints[Random.Range(0, 13)];
		rayClone = Instantiate(ray, ray1.transform.position, ray1.rotation);
		rayClone = Instantiate(ray, ray2.transform.position, ray2.rotation);
		rayClone = Instantiate(ray, ray3.transform.position, ray3.rotation);
		rayClone = Instantiate(ray, ray4.transform.position, ray4.rotation);
		rayClone = Instantiate(ray, ray5.transform.position, ray5.rotation);
		rayClone = Instantiate(ray, ray6.transform.position, ray6.rotation);
		rayClone = Instantiate(ray, ray7.transform.position, ray7.rotation);
		rayClone = Instantiate(ray, ray8.transform.position, ray8.rotation);
		rayClone = Instantiate(ray, ray9.transform.position, ray9.rotation);
		timer = 7;
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
	if (col.gameObject.name == "lamp1" || col.gameObject.name == "lamp2" || col.gameObject.name == "lamp3" || col.gameObject.name == "lamp4" || col.gameObject.name == "lamp5")
		HP -= 200;
}