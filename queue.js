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
}

Queue.prototype.push=function(item)
{
	if(item===undefined)
	{
		console.log("undefined items are not allowed");
		return;
	}
	if(this.pushIndex<this.capacity){
		if(this.array[this.pushIndex]===undefined) //check if next location is empty
		{
			this.array[this.pushIndex]=item;
			this.pushIndex=this.pushIndex+1;
			return this.array;
		}else{

			console.log("queue is full");
			return -1; //indicates error , array full
		}
	}if(this.pushIndex===this.capacity)
	{
		//check if first place is empty
		if(this.array[0]===undefined)
		{
			this.pushIndex=0;
			this.array[this.pushIndex]=item;
			this.pushIndex=this.pushIndex+1;
			return this.array;

		}
		else{
			console.log("queue is full");
			return -1; //indicates error , array full
		}
	}else{
		console.log("some serious error in implementation");
	}
};

Queue.prototype.pop=function()
{
		var item=this.array[this.popIndex];
	if(item!==undefined){
	    this.array[this.popIndex]=undefined;
		if(this.popIndex<this.capacity-1)
		{
			this.popIndex=this.popIndex+1;
		}else{
			this.popIndex = 0;
		}
		return item; 
	}else{
		console.log("queue is empty");
		return undefined; //assuming not null items
	}
};

module.exports=Queue;



