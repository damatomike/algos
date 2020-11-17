class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}
function binaryTreeDiameter(tree) {
  // Write your code here.
  return dfs(tree).diameter;
}

const dfs = (node) => {
  if (!node) return new TreeInfo(0, 0);
  const leftTree = dfs(node.left);
  const rightTree = dfs(node.right);

  const longestPath = leftTree.height + rightTree.height;
  const maxDiameter = Math.max(leftTree.diameter, rightTree.diameter);
  const currentDiameter = Math.max(longestPath, maxDiameter);
  const currentHeight = 1 + Math.max(leftTree.height, rightTree.height);

  return new TreeInfo(currentDiameter, currentHeight);
};
