const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = ''
      setTimeout(() => codes[idx + 1].focus(), 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10)
    }
  })
})

//

function solution(A) {
  let obj = {}
  for (let num of A) {
    obj[num] = ++obj[num] || 1
  }
  // return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))
  let oneCount = obj['1']
  let zeroCount = obj['0']

  let zeroRes = startZero(A)
  let oneRes = startOne(A)

  return Math.min(zeroRes, oneRes)
}

console.log(solution([1, 0, 1, 0, 1, 1])) // 1
console.log(solution([1, 1, 0, 1, 1])) // 2    //more 1s than 0s
console.log(solution([0, 1, 0])) // 0
console.log(solution([0, 1, 1, 0])) // 2

function startZero(A) {
  let counter = 0

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      if (A[i] !== 0) {
        counter++
      }
    }
    if (i % 2 !== 0) {
      if (A[i] !== 1) {
        counter++
      }
    }
  }
  return counter
}

function startOne(A) {
  let counter = 0

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      if (A[i] !== 1) {
        counter++
      }
    }
    if (i % 2 !== 0) {
      if (A[i] !== 0) {
        counter++
      }
    }
  }
  return counter
}
