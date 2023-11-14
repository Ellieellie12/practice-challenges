/*------------------------------------------
								CHALLENGE
--------------------------------------------

1) Code a function named duplicate that
	 accepts an array as its only argument and
	 returns a new array that contains the 
	 original elements followed by duplicates
	 of those elements.

	 For example:

		 duplicate(['🍔', '🍟', '🍺'])

		 would return -->
		 ['🍔', '🍟', '🍺', '🍔', '🍟', '🍺']

2) Return a new array, do not modify the 
	 array passed to the function.

------------------------------------------*/

// Write the function here....

function duplicate(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i])
  }
  return newArray
}

console.log(duplicate(['🍕', '🥗', '🍷', '🍰']))


// console.log('sanity check')
