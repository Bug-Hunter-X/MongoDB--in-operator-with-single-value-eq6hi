```javascript
const query = { name: 'John Doe' };

// Correct usage of direct equality check
db.collection('users').find({ name: 'John Doe' }).toArray((err, result)=>{
  console.log(result);
});
```