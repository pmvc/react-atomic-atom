react atomic atom
===============
   * react atomic ui for atom 
   * GIT
      * https://github.com/react-atomic/react-atomic-atom 
   * NPM
      * https://npm.im/react-atomic-atom 

## Example Usage
Demo Url:
https://react-atomic-ui.js.org/

## Fantastic Tip
### refCB help get rid of findDOMNode
Before:
```
const Input = (props) =>
{
    return <input />;
}

class MyInput extends Component 
{
  componentDidMount()
  {
      findDOMNode(this.el).focus();
  } 

  render()
  {
      <Input ref={el=>this.el=el} />
  }
}
```

After:
```
const Input = (props) =>
{
    let {refCb, ...others} = props;
    if (refCb) {
        others.ref = refCb;
    }
    return <input {...others} />;
}

class MyInput extends Component 
{
  componentDidMount()
  {
     this.el.focus();
  } 

  render()
  {
      <Input refCb={el=>this.el=el} />
  }
}
```
