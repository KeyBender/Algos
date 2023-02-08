import java.util.ArrayList;

class ContainsDuplicate{
    public static boolean contains(int[] nums) {
        Boolean contains = false;
        ArrayList<Integer> arr = new ArrayList<Integer>();

        for(int value : nums){
            arr.add(value);
        }

        for(Integer value : arr){
            if(arr.indexOf(value) != arr.lastIndexOf(value)){
                contains = true;
            }
        }

        return contains;
    }
    public static void main(String[] args){
        int[] nums = {1,2,3};
        System.out.println(contains(nums));
    }
}