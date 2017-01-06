/**
 * a simple queue implementation using array in nodejs
 * written by daljeet Singh 6th Jan 2017
 * Utilizes javascipt array implementation as the back end
 *
 */

function  Queue(capacity)
{
	this.array= new Array(capacity);
	this.capacity=capacity;
	this.popIndex=0;
	this.pushIndex=0;
	this.size=0;	
}


/*
 * checks if the array is not full pushes to the last index till it is full 
 */	
Queue.prototype.push=function(item)
{
	//TODO check if array is already full
	if(this.pushIndex<this.capacity){
		this.array[this.pushIndex]=item;
		this.size=this.pushIndex+1;
		this.pushIndex=this.size;       	
		return this.size;
	}else{
		return -1; //indicates error , array full
	}
};


/*
 * pops element if POPIndex != capacit    
 */	
Queue.prototype.pop=function()
{
	if(this.popIndex<this.capacity){	
		var item=this.array[this.popIndex];
		this.array[this.popIndex]=undefined;
		this.popIndex=this.popIndex+1;
		return item; 
	}else{
		return undefined; //assuming not null items
	}
};


Queue.prototype.print=function()
{
	console.log(JSON.stringify(this,0,4));
};


module.exports=Queue;



