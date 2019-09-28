#pragma strict

var NewMusic : AudioClip;

function Start () 
{

}

function Update () 
{

}

function Awake () 
{
    var go = GameObject.Find("Game Music");
    var audio : AudioSource = go.GetComponent.<AudioSource>();
    audio.clip = NewMusic; 
    audio.Play();
}