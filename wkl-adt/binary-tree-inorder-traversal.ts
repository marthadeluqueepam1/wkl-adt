//recursion

function recursion(root, temp){
    if(root){
        recursion(root.left, temp);
        temp.push(root.val);
        recursion(root.right,temp)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    let treeValues = []
    recursion(root, treeValues)
    return treeValues;
};

//loop

function inorderTraversal(root: TreeNode | null): number[] {
    let stack = [];
    let values = [];
    let current = root;

    while (current || stack.length !== 0){
        while(current){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        values.push(current.val)
        current = current.right
    }
    return values
};