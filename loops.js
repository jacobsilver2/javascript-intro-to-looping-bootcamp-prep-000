function forLoop(arr) {
  for(i=0; i<25; i++) {
    if (i===0) {
      arr.push("I am 1 strange loop.")
      } else {
        arr.push(`I am ${i} strange loops.`)
      }
  }
  return arr
}

function whileLoop(num) {
  while(num > 0) {
    console.log(--num)
  }
  return 'done'
}