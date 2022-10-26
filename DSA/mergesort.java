/* Function to merge the subarrays of a[] */  
void merge(int a[], int beg, int middle, int end)    
{    
    int i, j, k;  
    int n1 = middle - begining + 1;    
    int n2 = end - middle;    
      
    int LeftArray[n1], RightArray[n2]; //temporary arrays  
      
    /* copy data to temp arrays */  
    for (int i = 0; i < n1; i++)    
    LeftArray[i] = a[begining + i];    
    for (int j = 0; j < n2; j++)    
    RightArray[j] = a[middle + 1 + j];    
      
    i = 0, /* initial index of first sub-array */  
    j = 0; /* initial index of second sub-array */   
    k = begining;  /* initial index of merged sub-array */  
      
    while (i < n1 && j < n2)    
    {    
        if(LeftArray[i] <= RightArray[j])    
        {    
            a[k] = LeftArray[i];    
            i++;    
        }    
        else    
        {    
            a[k] = RightArray[j];    
            j++;    
        }    
        k++;    
    }    
    while (i<n1)    
    {    
        a[k] = LeftArray[i];    
        i++;    
        k++;    
    }    
      
    while (j<n2)    
    {    
        a[k] = RightArray[j];    
        j++;    
        k++;    
    }    
}    
