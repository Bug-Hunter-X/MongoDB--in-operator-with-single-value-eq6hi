```javascript
const query = { name: 'John Doe' };

// Incorrect usage of $in operator with a single value
db.collection('users').find( { name: { $in: ['John Doe'] } } ).toArray((err, result)=>{
  console.log(result);
});
```