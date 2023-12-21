// // USING BFS
function Queue() {
    var a = [],
      b = 0;
    this.getLength = function () {
      return a.length - b;
    };
    this.isEmpty = function () {
      return 0 == a.length;
    };
    this.enqueue = function (b) {
      a.push(b);
    };
    this.dequeue = function () {
      if (a.length === 0) return undefined;
      const c = a[b++];
      if (2 * b >= a.length) {
        a = a.slice(b);
        b = 0;
      }
      return c;
    };

    this.peek = function () {
      return 0 < a.length ? a[b] : void 0;
    };
  }
// // Example usage
// // const startWord = "der";
// // const targetWord = "dfs";
// // const wordList = ["des", "der", "dfr", "dgt", "dfs"];

const wordList = ["geek", "gefk"];
const startWord = "gedk";
const targetWord= "geek";

// const startWord = "hit";
// const targetWord = "cog";
// const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

const ans = wordLadderLength(startWord, targetWord, wordList);
// der--> des --> dfr --> dfs
console.log(ans);
function wordLadderLength(startWord, targetWord, wordList) {
    // Creating a queue ds of type {word, transitions to reach ‘word’}.
    const q = new Queue();
    // BFS traversal with pushing values in queue
    // when after a transformation, a word is found in wordList.
    q.enqueue({ word: startWord, steps: 1 });
    // Push all values of wordList into a set
    // to make deletion from it easier and in less time complexity.
    const set = new Set(wordList);
    set.delete(startWord);
    while (q.getLength() > 0) {
        const { word, steps } = q.dequeue();
        // we return the steps as soon as
        // the first occurrence of targetWord is found.
        if (word === targetWord) return steps;
        // Now, replace each character of ‘word’ with char
        // from a-z then check if ‘word’ exists in wordList.
        for (let i = 0; i < word.length; i++) {
            for (let ch = 'a'.charCodeAt(0); ch <= 'z'.charCodeAt(0); ch++) {//ASCII
                const replacedCharArray = word.split('');
                replacedCharArray[i] = String.fromCharCode(ch);
                const replacedWord = replacedCharArray.join('');
                // check if it exists in the set and push it in the queue.
                if (set.has(replacedWord)) {
                    set.delete(replacedWord);
                    q.enqueue({ word: replacedWord, steps: steps + 1 });
                }
            }
        }
    }
    // If there is no transformation sequence possible
    return 0;
}

