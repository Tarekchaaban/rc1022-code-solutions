/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const initialThird = list.next.next;
  list.next = initialThird;
  return list;
}
