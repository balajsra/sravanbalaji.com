---
associatedEntry: "mitre-1"
name: "AI Learning Track"
displayOrder: 3
---

**Problem**

The AI Learning Track was the first of two intern events I participated in. This was an 8 hour hackathon (spread over 3 days) with a team of 5.

**Task**

The goal is to classify URLs as malicious or benign using URL strings and information on the age of the domain and when the site was last updated.

**Result**

Our team went through the steps of feature engineering, training, validation, and testing. We generated new features like the length of the URL string, number of non-alphanumeric symbols in the URL, etc. that we read were good indicators of malicious URLs. We ran our training dataset through several models: Logistic Regression (LOGIT), Linear Support Vector Machine, Random Forest, eXtreme Gradient Boosting Trees (XGBoost), and a Simple Feed Forward Neural Network (FFNN). We found that the FFNN performed best and we were able to achieve an F1 score of 0.94 on the testing dataset.