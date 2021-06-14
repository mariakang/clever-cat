const dataset = [
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1049278-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1110860-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-11419-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-115218-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1160949-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1212407-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1228182-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1283091-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1318320-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1368583-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1430636-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1520670-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-152130-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-159472-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1608079-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1627110-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1698651-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-171327-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1759114-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1763721-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1768815-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1771524-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1784004-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1803887-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1858497-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-186900-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1931427-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-1944537-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2107985-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2123652-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2162145-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-217318-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2233350-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2256620-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2274324-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2280080-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2298727-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2403676-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2477476-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2514572-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2578531-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2704875-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2728578-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2771774-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2798826-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-283245-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-284601-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2850034-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2862975-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2870844-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2924895-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-2959018-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3065672-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3098476-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3117193-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3170711-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3189250-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3267425-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3293997-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3322209-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3346259-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3395085-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3396581-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3397442-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3437568-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3459196-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3464500-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3464500-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3464500-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3487620-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3518268-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3549035-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3564811-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3624496-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3686746-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3733696-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3782395-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3837280-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3921425-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3937418-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3983280-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-3985743-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4172448-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4190414-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4196521-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4315572-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4340661-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4363211-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4511610-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4512-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4513268-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4534031-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4675782-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-472699-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4766279-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4834475-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4852815-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4886177-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4906464-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4911367-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4921478-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-4955194-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5083836-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5148117-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5175014-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5180957-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5200363-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-520267-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-522391-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-528189-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5349917-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5356114-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5388550-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5401638-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5402107-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-541071-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5423277-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5425295-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5459424-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5472638-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5487025-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5498455-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5511958-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5513974-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5538803-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5545906-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5578360-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5601980-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5611875-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-561684-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5661793-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5661793-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5714306-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5789014-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5889760-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5893138-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-5997885-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6000527-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6085151-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6106856-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6112608-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6137647-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6190523-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6195450-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6204576-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6267994-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6293151-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6297597-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-630880-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6322108-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6332708-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6332708-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6332708-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6342197-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6395296-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6410283-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6442221-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6497443-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6503977-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6518197-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6524124-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6544436-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6569259-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6650392-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6667079-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-667173-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6703189-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6713743-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6874528-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-6983998-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7031638-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-706052-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7082548-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-71002-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7100645-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7165123-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7225301-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7236364-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-724740-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7331861-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7398200-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7423096-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-745902-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7483489-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7488601-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7519498-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-754920-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7590045-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7695736-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7738170-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7804528-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-78265-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-786023-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7922918-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7950798-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-7961936-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8014191-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8207090-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8278998-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8305321-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8305499-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8406720-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8417023-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8418332-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8441235-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8448068-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8495317-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-857568-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8586608-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8661138-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8698006-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-870639-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8750803-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8836138-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8876914-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8907762-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-8944072-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9054075-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9077486-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9092354-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9104493-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9145111-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9194822-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9217241-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9260113-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9275512-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9334007-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9343440-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9441169-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9708691-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9717513-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-976006-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9799657-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/NORMAL/NORMAL-9896495-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": true,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1135262-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1135262-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1135262-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1135262-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1220485-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1351146-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1351146-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1351146-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1351146-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1351146-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1351146-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1514320-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1514320-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1514320-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1602272-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1602272-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1602272-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1602272-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1714895-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1714895-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1714895-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1768914-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1768914-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1768914-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1768914-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1768914-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-1768914-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2034017-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2034017-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2034017-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2034017-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2034017-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2034017-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2131702-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2131702-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2131702-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-227418-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-227418-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-227418-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-227418-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2429208-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2429208-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2429208-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2772694-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-2772694-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3060399-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3060399-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3060399-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3060399-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3105669-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3105669-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3105669-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3105669-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3105669-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3127602-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3127602-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3436159-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3436159-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3436159-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3865791-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3865791-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3865791-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3865791-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3865791-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3961172-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3961172-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3961172-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-3961172-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4006043-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4006043-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4006043-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4059589-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4059589-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4059589-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4059589-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-40699-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-40699-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4070745-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4130801-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4130801-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4130801-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4161430-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4161430-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4161430-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4167818-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4167818-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4167818-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0007.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0008.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4269599-0009.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4322734-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4322734-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4345731-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4345731-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4345731-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4345731-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-4376803-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5141192-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5141192-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5141192-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5155977-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5155977-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5155977-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5155977-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5155977-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-518323-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-518323-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-518323-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5240350-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5240350-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5240350-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5240350-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5421131-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5421131-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5451280-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5451280-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-545831-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5489623-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5489623-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5489623-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0007.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5660566-0008.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5754167-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5754167-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-5757955-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6105615-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6105615-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6168941-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6168941-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6402155-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6402155-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6402155-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6402155-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6523466-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6523466-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6806075-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6806075-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6806075-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6806075-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6806075-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6833685-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6833685-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6833685-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6950003-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6950003-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6950003-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6950003-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6950003-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6950003-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6950003-0007.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-6987875-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7051071-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7051071-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7098043-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7136666-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7257218-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7257218-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7257218-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7257218-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7257218-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7346761-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7720431-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7720431-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7720431-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-7720431-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8046863-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8046863-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8190872-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8190872-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8190872-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8190872-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8190872-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-821920-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-821920-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8285922-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8285922-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8285922-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8285922-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8285922-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-840611-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-840611-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-840611-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-840611-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-840611-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-846757-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-846757-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8563288-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8837254-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8846908-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8846908-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8846908-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8983865-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8983865-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8983865-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8983865-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-8983865-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9050379-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9060950-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9060950-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9156003-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9156003-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9156003-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9156003-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9156003-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9182718-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9242636-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9242636-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9242636-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9242636-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9242636-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9242636-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-932292-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-932292-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-932292-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9364007-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9364007-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9364007-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-949117-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9503383-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9673743-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9673743-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9673743-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9764136-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9857270-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9857270-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9857270-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9857270-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9913238-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9913238-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/BACTERIA-9913238-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": true,
    "Viral": false,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1056329-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1142234-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1207991-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-131422-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1352878-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1352878-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1352878-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1352878-0004.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1352878-0005.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1352878-0006.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1352878-0007.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1423083-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1463523-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1517175-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1540910-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1540910-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-1795675-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2040583-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2040583-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2061674-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2102459-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2344316-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2352342-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2352342-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2470676-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-258000-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-262135-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-280992-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2831144-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-2914571-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3008952-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-30184-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3028666-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3039338-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3119878-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3174339-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3225323-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3239718-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3239718-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3426682-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3439481-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3522052-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3565661-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3635859-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3698459-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3746644-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3768496-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3814177-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3828598-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3828598-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3835085-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3835085-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3838349-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3906469-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-3915569-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4009702-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4033321-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4190128-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4275213-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4276353-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-432590-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4355102-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4360206-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4405644-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-447130-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4533169-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4655012-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4664910-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4810299-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4810299-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-48197-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4840553-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4852350-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-490019-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-490019-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-4911614-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5069337-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5180281-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5271295-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5366974-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5391810-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5508710-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5660566-0009.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5708148-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5708148-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5741681-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5813112-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5864551-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5880719-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-5927483-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6076183-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6076183-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6079770-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6138035-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6207158-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6249454-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6249454-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6249454-0003.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6682185-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6733553-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6812602-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6828836-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6831597-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6840343-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6844248-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-6844248-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7014527-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7014527-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7318158-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7337079-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7385225-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7441806-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7441806-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7477247-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7589381-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7638941-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7688430-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7788460-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7822291-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7909775-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-7979-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8106836-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-820420-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8314555-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8377377-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8385372-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-842024-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8427429-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8435135-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8507816-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8544560-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8574414-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-874167-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-8903181-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9018258-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9039335-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-904779-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9240664-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9325276-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9342284-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9476607-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9564688-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9564688-0002.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9584831-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9671740-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9783315-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9890836-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/PNEUMONIA/VIRUS-9968655-0001.jpeg",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": true,
    "Bacterial": false,
    "Viral": true,
    "Tuberculosis": false
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3307.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3308.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3309.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3310.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3311.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3312.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3313.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3314.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3315.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3316.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3317.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3318.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3319.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3320.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3321.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3322.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3323.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3324.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3325.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3326.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3327.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3328.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3329.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3330.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3331.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3332.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3333.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3334.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3335.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3336.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3337.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3338.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3339.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3340.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3341.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3342.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3343.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3344.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3345.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3346.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3347.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3348.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3349.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3350.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3351.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3352.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3353.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3354.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3355.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3356.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3357.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3358.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3359.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3360.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3361.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3362.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3363.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3364.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3365.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3366.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3367.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3368.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3369.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3370.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3371.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3372.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3373.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3374.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3375.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3376.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3377.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3378.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3379.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3380.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3381.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3382.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3383.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3384.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3385.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3386.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3387.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3388.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3389.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3390.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3391.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3392.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3393.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3394.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3395.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3396.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3397.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3398.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3399.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  },
  {
    "URL": "https://www.maria-kang.com/ai-assignment/data/chest_xray/test/TUBERCULOSIS/Tuberculosis-3400.png",
    "Chest X-Ray": true,
    "Normal": false,
    "Pneumonia": false,
    "Bacterial": false,
    "Viral": false,
    "Tuberculosis": true
  }
];
